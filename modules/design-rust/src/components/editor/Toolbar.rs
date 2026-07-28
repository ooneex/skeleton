use dioxus::prelude::*;

use super::EditorContext::{
    editor_insert_youtube, editor_redo, editor_set_color, editor_set_highlight, editor_set_link,
    editor_set_paragraph, editor_set_text_align, editor_toggle_blockquote, editor_toggle_bold,
    editor_toggle_bullet_list, editor_toggle_heading, editor_toggle_italic,
    editor_toggle_ordered_list, editor_toggle_strike, editor_toggle_subscript,
    editor_toggle_superscript, editor_toggle_task_list, editor_toggle_underline, editor_undo,
    editor_unset_color, editor_unset_highlight, editor_unset_link, use_editor_context,
};
use super::LinkDialog::LinkDialog;
use super::YouTubeDialog::YouTubeDialog;
use crate::components::editor::types::EditorAlignType;
use crate::components::toggle::Toggle;
use crate::hooks::use_preserve_selection;
use crate::icons::outline::arrows::sm::{RedoIcon, UndoIcon};
use crate::icons::outline::design_development::sm::{
    Heading1Icon, Heading2Icon, Heading3Icon, PaletteIcon, TextAlignCenterIcon,
    TextAlignJustifyIcon, TextAlignLeftIcon, TextAlignRightIcon, TextItalicIcon,
    TextStrikethroughIcon, TextUnderlineIcon,
};
use crate::icons::outline::editing::sm::{
    BlockquoteIcon, LinkIcon, OrderedListIcon, ParagraphIcon, SubscriptIcon, SuperscriptIcon,
    TextBoldIcon,
};
use crate::icons::outline::photography_video::sm::VideoIcon;
use crate::icons::outline::school_education::sm::HighlighterIcon;
use crate::icons::outline::ui_layout::sm::{BulletListIcon, CheckListIcon, XmarkIcon};
use crate::utils::cn;

// ── 26 simple colors (inlined from @ooneex/color) ────────────────────────────

const SIMPLE_COLORS: &[(&str, &str)] = &[
    ("#3B82F6", "Blue"),
    ("#10B981", "Green"),
    ("#8B5CF6", "Purple"),
    ("#F59E0B", "Yellow"),
    ("#EC4899", "Pink"),
    ("#F97316", "Orange"),
    ("#6B7280", "Gray"),
    ("#EF4444", "Red"),
    ("#14B8A6", "Teal"),
    ("#6366F1", "Indigo"),
    ("#84CC16", "Lime"),
    ("#06B6D4", "Cyan"),
    ("#A855F7", "Violet"),
    ("#F43F5E", "Rose"),
    ("#78716C", "Stone"),
    ("#0EA5E9", "Sky"),
    ("#22C55E", "Emerald"),
    ("#FACC15", "Amber"),
    ("#E879F9", "Fuchsia"),
    ("#2DD4BF", "Aqua"),
    ("#FB923C", "Peach"),
    ("#818CF8", "Lavender"),
    ("#F472B6", "Flamingo"),
    ("#4ADE80", "Mint"),
    ("#000000", "Black"),
    ("#FFFFFF", "White"),
];

// ── Shared ToolbarToggle ──────────────────────────────────────────────────────

#[derive(Props, Clone, PartialEq)]
struct ToolbarToggleProps {
    label: String,
    #[props(default)]
    pressed: Option<bool>,
    #[props(default)]
    disabled: Option<bool>,
    on_toggle: EventHandler<()>,
    #[props(default)]
    class: Option<String>,
    children: Element,
}

/// Shared toolbar button. Prevents the default mousedown so the editor keeps its
/// text selection while the command runs.
///
/// `Toggle` has no `onmousedown` prop, so the listener is pushed through its
/// `attributes` spread instead.
#[component]
fn ToolbarToggle(props: ToolbarToggleProps) -> Element {
    let preserve = use_preserve_selection();
    rsx! {
        Toggle {
            "aria-label": props.label.clone(),
            title: props.label.clone(),
            disabled: props.disabled.unwrap_or(false),
            pressed: props.pressed,
            class: props.class,
            attributes: vec![
                dioxus_elements::events::onmousedown(move |event: MouseEvent| preserve.call(event)),
            ],
            on_pressed_change: move |_| { props.on_toggle.call(()); },
            {props.children}
        }
    }
}

// ── Inline color swatch picker ────────────────────────────────────────────────

#[derive(Props, Clone, PartialEq)]
struct ColorSwatchPickerProps {
    current: String,
    on_pick: EventHandler<Option<String>>,
}

#[component]
fn ColorSwatchPicker(props: ColorSwatchPickerProps) -> Element {
    rsx! {
        div {
            class: "absolute top-full left-0 z-50 mt-1 rounded bg-popover p-2 shadow-md ring ring-ring-active grid gap-1.5",
            style: "grid-template-columns: repeat(6, minmax(0, 1fr));",
            for (hex, name) in SIMPLE_COLORS {
                button {
                    key: "{hex}",
                    r#type: "button",
                    title: *name,
                    class: cn([
                        "size-6 rounded-full cursor-pointer transition-all flex items-center justify-center motion-safe:hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        if *hex == "#FFFFFF" { "ring ring-ring-active" } else { "" },
                        if *hex == props.current.as_str() { "ring-2 ring-primary ring-offset-2" } else { "" },
                    ]),
                    style: "background-color: {hex};",
                    onmousedown: move |e: MouseEvent| {
                        e.prevent_default();
                        props.on_pick.call(Some(hex.to_string()));
                    },
                }
            }
            button {
                r#type: "button",
                class: "col-span-6 flex items-center justify-center gap-1 rounded px-2 py-1 text-xs text-muted-foreground hover:bg-accent mt-1",
                onmousedown: move |e: MouseEvent| {
                    e.prevent_default();
                    props.on_pick.call(None);
                },
                XmarkIcon { class: "size-3" }
                "Reset"
            }
        }
    }
}

// ── Toolbar button props ──────────────────────────────────────────────────────

#[derive(Props, Clone, PartialEq)]
pub struct ToolbarButtonProps {
    #[props(default)]
    pub class: Option<String>,
}

// ── Individual toolbar buttons ────────────────────────────────────────────────

#[component]
pub fn EditorBold(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let pressed = ctx.state.read().bold;
    rsx! {
        ToolbarToggle { label: "Bold", pressed, class: props.class,
            on_toggle: move |_| editor_toggle_bold(&ctx),
            TextBoldIcon { class: "size-4" }
        }
    }
}

#[component]
pub fn EditorItalic(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let pressed = ctx.state.read().italic;
    rsx! {
        ToolbarToggle { label: "Italic", pressed, class: props.class,
            on_toggle: move |_| editor_toggle_italic(&ctx),
            TextItalicIcon { class: "size-4" }
        }
    }
}

#[component]
pub fn EditorUnderline(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let pressed = ctx.state.read().underline;
    rsx! {
        ToolbarToggle { label: "Underline", pressed, class: props.class,
            on_toggle: move |_| editor_toggle_underline(&ctx),
            TextUnderlineIcon { class: "size-4" }
        }
    }
}

#[component]
pub fn EditorStrike(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let pressed = ctx.state.read().strike;
    rsx! {
        ToolbarToggle { label: "Strikethrough", pressed, class: props.class,
            on_toggle: move |_| editor_toggle_strike(&ctx),
            TextStrikethroughIcon { class: "size-4" }
        }
    }
}

#[component]
pub fn EditorSubscript(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let pressed = ctx.state.read().subscript;
    rsx! {
        ToolbarToggle { label: "Subscript", pressed, class: props.class,
            on_toggle: move |_| editor_toggle_subscript(&ctx),
            SubscriptIcon { class: "size-3.5" }
        }
    }
}

#[component]
pub fn EditorSuperscript(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let pressed = ctx.state.read().superscript;
    rsx! {
        ToolbarToggle { label: "Superscript", pressed, class: props.class,
            on_toggle: move |_| editor_toggle_superscript(&ctx),
            SuperscriptIcon { class: "size-3.5" }
        }
    }
}

#[component]
pub fn EditorParagraph(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let pressed = ctx.state.read().paragraph;
    rsx! {
        ToolbarToggle { label: "Paragraph", pressed, class: props.class,
            on_toggle: move |_| editor_set_paragraph(&ctx),
            ParagraphIcon { class: "size-4" }
        }
    }
}

#[component]
pub fn EditorBlockquote(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let pressed = ctx.state.read().blockquote;
    rsx! {
        ToolbarToggle { label: "Blockquote", pressed, class: props.class,
            on_toggle: move |_| editor_toggle_blockquote(&ctx),
            BlockquoteIcon { class: "size-4" }
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct EditorHeadingProps {
    pub level: u8,
    #[props(default)]
    pub class: Option<String>,
}

#[component]
pub fn EditorHeading(props: EditorHeadingProps) -> Element {
    let ctx = use_editor_context();
    let level = props.level;
    let pressed = ctx.state.read().heading_level == Some(level);
    rsx! {
        ToolbarToggle {
            label: "Heading {level}",
            pressed,
            class: props.class.clone(),
            on_toggle: move |_| editor_toggle_heading(&ctx, level),
            match level {
                1 => rsx! { Heading1Icon { class: "size-4" } },
                2 => rsx! { Heading2Icon { class: "size-4" } },
                _ => rsx! { Heading3Icon { class: "size-4" } },
            }
        }
    }
}

#[component]
pub fn EditorBulletList(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let pressed = ctx.state.read().bullet_list;
    rsx! {
        ToolbarToggle { label: "Bullet list", pressed, class: props.class,
            on_toggle: move |_| editor_toggle_bullet_list(&ctx),
            BulletListIcon { class: "size-5" }
        }
    }
}

#[component]
pub fn EditorOrderedList(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let pressed = ctx.state.read().ordered_list;
    rsx! {
        ToolbarToggle { label: "Numbered list", pressed, class: props.class,
            on_toggle: move |_| editor_toggle_ordered_list(&ctx),
            OrderedListIcon { class: "size-5" }
        }
    }
}

#[component]
pub fn EditorTaskList(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let pressed = ctx.state.read().task_list;
    rsx! {
        ToolbarToggle { label: "Task list", pressed, class: props.class,
            on_toggle: move |_| editor_toggle_task_list(&ctx),
            CheckListIcon { class: "size-5" }
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct EditorAlignProps {
    pub align: String,
    #[props(default)]
    pub class: Option<String>,
}

#[component]
pub fn EditorAlign(props: EditorAlignProps) -> Element {
    let ctx = use_editor_context();
    let align = props.align.clone();
    let align_type = EditorAlignType::from(align.as_str());
    let pressed = ctx.state.read().align == align_type;
    rsx! {
        ToolbarToggle {
            label: "Align {align}",
            pressed,
            class: props.class.clone(),
            on_toggle: move |_| editor_set_text_align(&ctx, align_type),
            match align.as_str() {
                "center" => rsx! { TextAlignCenterIcon { class: "size-5" } },
                "right"  => rsx! { TextAlignRightIcon { class: "size-5" } },
                "justify"=> rsx! { TextAlignJustifyIcon { class: "size-5" } },
                _        => rsx! { TextAlignLeftIcon { class: "size-5" } },
            }
        }
    }
}

#[component]
pub fn EditorColor(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let has_color = !ctx.state.read().color.is_empty();
    let current_color = ctx.state.read().color.clone();
    let mut show = use_signal(|| false);
    let preserve = use_preserve_selection();

    rsx! {
        div { class: "relative", onmousedown: preserve,
            ToolbarToggle {
                label: "Text color",
                pressed: has_color,
                class: props.class.clone(),
                on_toggle: move |_| {
                    let opened = *show.read();
                    show.set(!opened);
                },
                PaletteIcon { class: "size-3.5" }
            }
            if *show.read() {
                ColorSwatchPicker {
                    current: current_color,
                    on_pick: move |color: Option<String>| {
                        match color {
                            Some(c) => editor_set_color(&ctx, &c),
                            None => editor_unset_color(&ctx),
                        }
                        show.set(false);
                    },
                }
            }
        }
    }
}

#[component]
pub fn EditorHighlight(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let has_highlight = !ctx.state.read().highlight.is_empty();
    let current_highlight = ctx.state.read().highlight.clone();
    let mut show = use_signal(|| false);
    let preserve = use_preserve_selection();

    rsx! {
        div { class: "relative", onmousedown: preserve,
            ToolbarToggle {
                label: "Highlight",
                pressed: has_highlight,
                class: props.class.clone(),
                on_toggle: move |_| {
                    let opened = *show.read();
                    show.set(!opened);
                },
                HighlighterIcon { class: "size-4" }
            }
            if *show.read() {
                ColorSwatchPicker {
                    current: current_highlight,
                    on_pick: move |color: Option<String>| {
                        match color {
                            Some(c) => editor_set_highlight(&ctx, &c),
                            None => editor_unset_highlight(&ctx),
                        }
                        show.set(false);
                    },
                }
            }
        }
    }
}

#[component]
pub fn EditorLink(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let is_active = ctx.state.read().link;
    let initial_href = ctx.state.read().link_href.clone();
    let mut show = use_signal(|| false);

    rsx! {
        ToolbarToggle {
            label: "Link",
            pressed: is_active,
            class: props.class.clone(),
            on_toggle: move |_| {
                let opened = *show.read();
                show.set(!opened);
            },
            LinkIcon { class: "size-4" }
        }
        LinkDialog {
            open: *show.read(),
            initial_href,
            is_active,
            on_submit: {
                let ctx = ctx.clone();
                move |href: String| {
                    editor_set_link(&ctx, &href);
                    show.set(false);
                }
            },
            on_remove: move |_| {
                editor_unset_link(&ctx);
                show.set(false);
            },
            on_cancel: move |_| { show.set(false); },
        }
    }
}

#[component]
pub fn EditorYouTube(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let mut show = use_signal(|| false);

    rsx! {
        ToolbarToggle {
            label: "Embed YouTube video",
            class: props.class.clone(),
            on_toggle: move |_| {
                let opened = *show.read();
                show.set(!opened);
            },
            VideoIcon { class: "size-4" }
        }
        YouTubeDialog {
            open: *show.read(),
            on_submit: move |url: String| {
                editor_insert_youtube(&ctx, &url);
                show.set(false);
            },
            on_cancel: move |_| { show.set(false); },
        }
    }
}

#[component]
pub fn EditorUndo(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let can_undo = ctx.state.read().can_undo;
    rsx! {
        ToolbarToggle { label: "Undo", disabled: !can_undo, class: props.class,
            on_toggle: move |_| editor_undo(&ctx),
            UndoIcon { class: "size-5" }
        }
    }
}

#[component]
pub fn EditorRedo(props: ToolbarButtonProps) -> Element {
    let ctx = use_editor_context();
    let can_redo = ctx.state.read().can_redo;
    rsx! {
        ToolbarToggle { label: "Redo", disabled: !can_redo, class: props.class,
            on_toggle: move |_| editor_redo(&ctx),
            RedoIcon { class: "size-5" }
        }
    }
}

// ── EditorToolbar container ───────────────────────────────────────────────────

#[derive(Props, Clone, PartialEq)]
pub struct EditorToolbarProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub children: Option<Element>,
}

#[component]
pub fn EditorToolbar(props: EditorToolbarProps) -> Element {
    let ctx = use_editor_context();
    let show_headings = ctx.show_headings;
    let show_history = ctx.show_history;
    let show_media = ctx.show_media;
    rsx! {
        div {
            "data-slot": "editor-toolbar",
            class: cn([
                "flex flex-wrap items-center gap-1 rounded border border-border bg-background p-1",
                props.class.as_deref().unwrap_or_default(),
            ]),
            if let Some(children) = props.children {
                {children}
            } else {
                if show_headings {
                    EditorHeading { level: 1 }
                    EditorHeading { level: 2 }
                    EditorHeading { level: 3 }
                }
                EditorParagraph {}
                EditorBold {}
                EditorItalic {}
                EditorUnderline {}
                EditorStrike {}
                EditorSubscript {}
                EditorSuperscript {}
                EditorColor {}
                EditorHighlight {}
                EditorLink {}
                EditorBlockquote {}
                EditorBulletList {}
                EditorOrderedList {}
                EditorTaskList {}
                EditorAlign { align: "left" }
                EditorAlign { align: "center" }
                EditorAlign { align: "right" }
                EditorAlign { align: "justify" }
                if show_media { EditorYouTube {} }
                if show_history {
                    EditorUndo {}
                    EditorRedo {}
                }
            }
        }
    }
}
