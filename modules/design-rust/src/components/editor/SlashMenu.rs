use dioxus::document::eval;
use dioxus::prelude::*;

use super::EditorContext::{
    EditorContext, editor_insert_youtube, editor_redo, editor_set_paragraph, editor_set_text_align,
    editor_toggle_blockquote, editor_toggle_bold, editor_toggle_bullet_list, editor_toggle_heading,
    editor_toggle_italic, editor_toggle_ordered_list, editor_toggle_strike,
    editor_toggle_subscript, editor_toggle_superscript, editor_toggle_task_list,
    editor_toggle_underline, editor_undo, use_editor_context,
};
use super::YouTubeDialog::YouTubeDialog;
use super::commands::{restore_selection, save_selection};
use crate::components::button::{Button, ButtonVariantType};
use crate::components::editor::types::EditorAlignType;
use crate::hooks::use_preserve_selection;
use crate::icons::outline::arrows::sm::{RedoIcon, UndoIcon};
use crate::icons::outline::design_development::sm::{
    Heading1Icon, Heading2Icon, Heading3Icon, TextAlignCenterIcon, TextAlignJustifyIcon,
    TextAlignLeftIcon, TextAlignRightIcon, TextItalicIcon, TextStrikethroughIcon, TextUnderlineIcon,
};
use crate::icons::outline::editing::sm::{
    BlockquoteIcon, OrderedListIcon, ParagraphIcon, SubscriptIcon, SuperscriptIcon, TextBoldIcon,
};
use crate::icons::outline::photography_video::sm::VideoIcon;
use crate::icons::outline::ui_layout::sm::{BulletListIcon, CheckListIcon};
use crate::utils::cn;

/// The icon rendered in front of a menu entry. Rust has no first-class
/// "component value" the way the TS item type stores `ComponentType`, so the
/// item carries this tag and [`slash_icon`] maps it back to the component.
#[derive(Clone, Copy, PartialEq, Eq)]
enum SlashIconType {
    Heading1,
    Heading2,
    Heading3,
    TextBold,
    TextItalic,
    TextUnderline,
    TextStrikethrough,
    Subscript,
    Superscript,
    TextAlignLeft,
    TextAlignCenter,
    TextAlignRight,
    TextAlignJustify,
    BulletList,
    OrderedList,
    CheckList,
    Paragraph,
    Blockquote,
    Video,
    Undo,
    Redo,
}

fn slash_icon(icon: SlashIconType) -> Element {
    match icon {
        SlashIconType::Heading1 => rsx! { Heading1Icon { class: "size-4" } },
        SlashIconType::Heading2 => rsx! { Heading2Icon { class: "size-4" } },
        SlashIconType::Heading3 => rsx! { Heading3Icon { class: "size-4" } },
        SlashIconType::TextBold => rsx! { TextBoldIcon { class: "size-4" } },
        SlashIconType::TextItalic => rsx! { TextItalicIcon { class: "size-4" } },
        SlashIconType::TextUnderline => rsx! { TextUnderlineIcon { class: "size-4" } },
        SlashIconType::TextStrikethrough => rsx! { TextStrikethroughIcon { class: "size-4" } },
        SlashIconType::Subscript => rsx! { SubscriptIcon { class: "size-4" } },
        SlashIconType::Superscript => rsx! { SuperscriptIcon { class: "size-4" } },
        SlashIconType::TextAlignLeft => rsx! { TextAlignLeftIcon { class: "size-4" } },
        SlashIconType::TextAlignCenter => rsx! { TextAlignCenterIcon { class: "size-4" } },
        SlashIconType::TextAlignRight => rsx! { TextAlignRightIcon { class: "size-4" } },
        SlashIconType::TextAlignJustify => rsx! { TextAlignJustifyIcon { class: "size-4" } },
        SlashIconType::BulletList => rsx! { BulletListIcon { class: "size-4" } },
        SlashIconType::OrderedList => rsx! { OrderedListIcon { class: "size-4" } },
        SlashIconType::CheckList => rsx! { CheckListIcon { class: "size-4" } },
        SlashIconType::Paragraph => rsx! { ParagraphIcon { class: "size-4" } },
        SlashIconType::Blockquote => rsx! { BlockquoteIcon { class: "size-4" } },
        SlashIconType::Video => rsx! { VideoIcon { class: "size-4" } },
        SlashIconType::Undo => rsx! { UndoIcon { class: "size-4" } },
        SlashIconType::Redo => rsx! { RedoIcon { class: "size-4" } },
    }
}

#[derive(Clone)]
struct SlashItem {
    title: &'static str,
    description: &'static str,
    icon: SlashIconType,
    group: &'static str,
    aliases: &'static [&'static str],
}

const SLASH_ITEMS: &[SlashItem] = &[
    SlashItem {
        title: "Heading 1",
        description: "Large section heading",
        icon: SlashIconType::Heading1,
        group: "Headings",
        aliases: &["h1", "heading1"],
    },
    SlashItem {
        title: "Heading 2",
        description: "Medium section heading",
        icon: SlashIconType::Heading2,
        group: "Headings",
        aliases: &["h2", "heading2"],
    },
    SlashItem {
        title: "Heading 3",
        description: "Small section heading",
        icon: SlashIconType::Heading3,
        group: "Headings",
        aliases: &["h3", "heading3"],
    },
    SlashItem {
        title: "Bold",
        description: "Make text bold",
        icon: SlashIconType::TextBold,
        group: "Text Formatting",
        aliases: &["strong"],
    },
    SlashItem {
        title: "Italic",
        description: "Make text italic",
        icon: SlashIconType::TextItalic,
        group: "Text Formatting",
        aliases: &["em", "emphasis"],
    },
    SlashItem {
        title: "Underline",
        description: "Underline text",
        icon: SlashIconType::TextUnderline,
        group: "Text Formatting",
        aliases: &[],
    },
    SlashItem {
        title: "Strikethrough",
        description: "Strike through text",
        icon: SlashIconType::TextStrikethrough,
        group: "Text Formatting",
        aliases: &["strike", "del"],
    },
    SlashItem {
        title: "Subscript",
        description: "Make text subscript",
        icon: SlashIconType::Subscript,
        group: "Text Formatting",
        aliases: &["sub"],
    },
    SlashItem {
        title: "Superscript",
        description: "Make text superscript",
        icon: SlashIconType::Superscript,
        group: "Text Formatting",
        aliases: &["sup"],
    },
    SlashItem {
        title: "Align Left",
        description: "Align text to the left",
        icon: SlashIconType::TextAlignLeft,
        group: "Alignment",
        aliases: &["left"],
    },
    SlashItem {
        title: "Align Center",
        description: "Center align text",
        icon: SlashIconType::TextAlignCenter,
        group: "Alignment",
        aliases: &["center"],
    },
    SlashItem {
        title: "Align Right",
        description: "Align text to the right",
        icon: SlashIconType::TextAlignRight,
        group: "Alignment",
        aliases: &["right"],
    },
    SlashItem {
        title: "Justify",
        description: "Justify text",
        icon: SlashIconType::TextAlignJustify,
        group: "Alignment",
        aliases: &["justified"],
    },
    SlashItem {
        title: "Bullet List",
        description: "Create a bullet list",
        icon: SlashIconType::BulletList,
        group: "Lists",
        aliases: &["ul", "unordered"],
    },
    SlashItem {
        title: "Numbered List",
        description: "Create a numbered list",
        icon: SlashIconType::OrderedList,
        group: "Lists",
        aliases: &["ol", "ordered"],
    },
    SlashItem {
        title: "Task List",
        description: "Create a task list with checkboxes",
        icon: SlashIconType::CheckList,
        group: "Lists",
        aliases: &["todo", "checklist"],
    },
    SlashItem {
        title: "Paragraph",
        description: "Convert to paragraph",
        icon: SlashIconType::Paragraph,
        group: "Blocks",
        aliases: &["p", "text", "normal"],
    },
    SlashItem {
        title: "Blockquote",
        description: "Create a blockquote",
        icon: SlashIconType::Blockquote,
        group: "Blocks",
        aliases: &["quote"],
    },
    SlashItem {
        title: "YouTube",
        description: "Embed a YouTube video",
        icon: SlashIconType::Video,
        group: "Media",
        aliases: &["video", "embed"],
    },
    SlashItem {
        title: "Undo",
        description: "Undo the last action",
        icon: SlashIconType::Undo,
        group: "History",
        aliases: &["back", "revert"],
    },
    SlashItem {
        title: "Redo",
        description: "Redo the last undone action",
        icon: SlashIconType::Redo,
        group: "History",
        aliases: &["forward", "repeat"],
    },
];

/// Gates copied from the editor context: groups the host opted out of.
#[derive(Clone, Copy)]
struct SlashGates {
    show_headings: bool,
    show_history: bool,
    show_media: bool,
}

/// Filters the item list by the typed query, matching title, description and
/// aliases — the counterpart of `filterItems` in the TS source.
fn filter_items(query: &str, gates: SlashGates) -> Vec<&'static SlashItem> {
    let lower = query.to_lowercase();
    SLASH_ITEMS
        .iter()
        .filter(|item| {
            if !gates.show_headings && item.group == "Headings" {
                return false;
            }
            if !gates.show_history && item.group == "History" {
                return false;
            }
            if !gates.show_media && item.group == "Media" {
                return false;
            }
            if lower.is_empty() {
                return true;
            }
            item.title.to_lowercase().contains(&lower)
                || item.description.to_lowercase().contains(&lower)
                || item
                    .aliases
                    .iter()
                    .any(|alias| alias.to_lowercase().contains(&lower))
        })
        .collect()
}

/// Runs the command bound to a menu entry. `YouTube` is handled by the caller
/// because it first has to collect a URL from [`YouTubeDialog`].
fn run_slash_command(ctx: &EditorContext, title: &str) {
    match title {
        "Heading 1" => editor_toggle_heading(ctx, 1),
        "Heading 2" => editor_toggle_heading(ctx, 2),
        "Heading 3" => editor_toggle_heading(ctx, 3),
        "Bold" => editor_toggle_bold(ctx),
        "Italic" => editor_toggle_italic(ctx),
        "Underline" => editor_toggle_underline(ctx),
        "Strikethrough" => editor_toggle_strike(ctx),
        "Subscript" => editor_toggle_subscript(ctx),
        "Superscript" => editor_toggle_superscript(ctx),
        "Align Left" => editor_set_text_align(ctx, EditorAlignType::Left),
        "Align Center" => editor_set_text_align(ctx, EditorAlignType::Center),
        "Align Right" => editor_set_text_align(ctx, EditorAlignType::Right),
        "Justify" => editor_set_text_align(ctx, EditorAlignType::Justify),
        "Bullet List" => editor_toggle_bullet_list(ctx),
        "Numbered List" => editor_toggle_ordered_list(ctx),
        "Task List" => editor_toggle_task_list(ctx),
        "Paragraph" => editor_set_paragraph(ctx),
        "Blockquote" => editor_toggle_blockquote(ctx),
        "Undo" => editor_undo(ctx),
        "Redo" => editor_redo(ctx),
        _ => {}
    }
}

/// Deletes the typed `/query` before the command runs, mirroring the `Range` +
/// `deleteContents()` step of the TS `applyItem`.
///
/// The trigger is detected in JS (see the listener installed by [`SlashMenu`]),
/// so the `Text` node and its offsets never cross into Rust: the listener parks
/// the live trigger on `window` and this snippet consumes it. A stale range
/// throws, exactly like the TS version, and is swallowed so the command still
/// runs.
fn delete_slash_trigger(editor_id: &str) {
    let _ = eval(&format!(
        r#"
        (function() {{
          const trigger = window['__slash_trigger_{editor_id}'];
          window['__slash_trigger_{editor_id}'] = null;
          if (!trigger || !trigger.node) return;
          try {{
            const range = document.createRange();
            range.setStart(trigger.node, trigger.from);
            range.setEnd(trigger.node, trigger.to);
            const sel = window.getSelection();
            if (sel) {{
              sel.removeAllRanges();
              sel.addRange(range);
            }}
            range.deleteContents();
          }} catch (e) {{
            // The trigger range may be stale; fall through and run the command.
          }}
        }})()
        "#
    ));
}

/// Scrolls the highlighted entry into view, the equivalent of the TS
/// `itemRefs` map plus `scrollIntoView({ block: "nearest" })`. Dioxus has no
/// ref map here, so each entry carries a deterministic `id` instead.
fn scroll_active_into_view(editor_id: &str, index: usize) {
    let _ = eval(&format!(
        r#"
        (function() {{
          const el = document.getElementById('slash-item-{editor_id}-{index}');
          if (el) el.scrollIntoView({{ block: 'nearest' }});
        }})()
        "#
    ));
}

/// The mutable menu state, grouped so the trigger listener and the click
/// handlers can share one `apply` implementation without any hook call.
#[derive(Clone, Copy)]
struct SlashMenuState {
    open: Signal<bool>,
    query: Signal<String>,
    active_index: Signal<usize>,
    position: Signal<Option<(f64, f64)>>,
    youtube_open: Signal<bool>,
}

impl SlashMenuState {
    fn close(&mut self) {
        self.open.set(false);
        self.query.set(String::new());
        self.active_index.set(0);
        self.position.set(None);
    }

    /// Deletes the typed `/query`, closes the menu and runs the entry, in the
    /// order the TS `applyItem` uses.
    fn apply(&mut self, ctx: &EditorContext, editor_id: &str, title: &str) {
        delete_slash_trigger(editor_id);
        self.close();
        if title == "YouTube" {
            save_selection(editor_id);
            self.youtube_open.set(true);
        } else {
            run_slash_command(ctx, title);
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct SlashMenuProps {
    #[props(default)]
    pub class: Option<String>,
}

/// Slash-command menu. Monitors the editor for a `/` trigger, shows a
/// filterable keyboard-navigable item list, and applies the chosen entry by
/// first removing the typed `/query`.
///
/// **Deviation**: The TS version walks the DOM from Rust-equivalent code
/// (TreeWalker + `Range`) and attaches a capture-phase `keydown` listener from
/// React. Neither the caret's `Text` node nor a capture-phase listener can be
/// expressed through Dioxus, so both live in one JS snippet installed once per
/// editor: it pushes the detected query, the caret rect and the navigation keys
/// back over the eval channel, and parks the live trigger range on `window` for
/// [`delete_slash_trigger`]. `Enter` is swallowed in the capture phase there,
/// which is what stops it from reaching the editor's submit handler.
#[component]
pub fn SlashMenu(props: SlashMenuProps) -> Element {
    let ctx = use_editor_context();
    let show_slash_menu = ctx.show_slash_menu;
    let gates = SlashGates {
        show_headings: ctx.show_headings,
        show_history: ctx.show_history,
        show_media: ctx.show_media,
    };
    let editor_id = ctx.editor_id.read().clone();

    let mut state = SlashMenuState {
        open: use_signal(|| false),
        query: use_signal(String::new),
        active_index: use_signal(|| 0),
        position: use_signal(|| None),
        youtube_open: use_signal(|| false),
    };
    let preserve = use_preserve_selection();

    let items: Vec<&'static SlashItem> = filter_items(&state.query.read(), gates);

    // Install the trigger + keyboard listener once per editor element.
    let editor_id_listener = editor_id.clone();
    let listener_ctx = ctx.clone();
    use_future(move || {
        let id = editor_id_listener.clone();
        let ctx = listener_ctx.clone();
        let mut state = state;
        async move {
            if !show_slash_menu {
                return;
            }
            let js = format!(
                r#"
                (function() {{
                  if (window['__slash_{id}']) return;
                  window['__slash_{id}'] = true;
                  const root = document.getElementById('{id}');
                  if (!root) return;
                  window['__slash_trigger_{id}'] = null;
                  window['__slash_open_{id}'] = false;
                  function check() {{
                    const sel = window.getSelection();
                    if (!sel || sel.rangeCount === 0 || !sel.isCollapsed || !root.contains(sel.anchorNode)) {{
                      window['__slash_trigger_{id}'] = null;
                      dioxus.send(['close', '', '', '']);
                      return;
                    }}
                    const node = sel.anchorNode;
                    if (node.nodeType !== 3) {{
                      window['__slash_trigger_{id}'] = null;
                      dioxus.send(['close', '', '', '']);
                      return;
                    }}
                    const before = (node.textContent || '').slice(0, sel.anchorOffset);
                    const m = before.match(/(?:^|\s)\/([^\s\/]*)$/);
                    if (!m) {{
                      window['__slash_trigger_{id}'] = null;
                      dioxus.send(['close', '', '', '']);
                      return;
                    }}
                    const query = m[1] || '';
                    window['__slash_trigger_{id}'] = {{
                      node: node,
                      from: sel.anchorOffset - query.length - 1,
                      to: sel.anchorOffset,
                    }};
                    const rect = sel.getRangeAt(0).getBoundingClientRect();
                    dioxus.send(['open', query, String(rect.bottom + 4), String(rect.left)]);
                  }}
                  root.addEventListener('input', check);
                  document.addEventListener('selectionchange', check);
                  root.addEventListener('keydown', function(event) {{
                    if (!window['__slash_open_{id}']) return;
                    const key = event.key;
                    if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Enter' || key === 'Escape') {{
                      event.preventDefault();
                      event.stopPropagation();
                      dioxus.send(['key', key, '', '']);
                    }}
                  }}, true);
                }})()
                "#
            );
            let mut listener = eval(&js);
            loop {
                match listener.recv::<Vec<String>>().await {
                    Ok(message) if message.len() >= 4 => match message[0].as_str() {
                        "open" => {
                            let top: f64 = message[2].parse().unwrap_or(0.0);
                            let left: f64 = message[3].parse().unwrap_or(0.0);
                            // Reset the highlighted item whenever the query — and
                            // therefore the result set — changes.
                            if *state.query.read() != message[1] {
                                state.query.set(message[1].clone());
                                state.active_index.set(0);
                            }
                            state.open.set(true);
                            state.position.set(Some((top, left)));
                        }
                        "close" => {
                            state.open.set(false);
                            state.position.set(None);
                        }
                        "key" => {
                            let count = filter_items(&state.query.read(), gates).len();
                            if !*state.open.read() || count == 0 {
                                continue;
                            }
                            let current = *state.active_index.read();
                            match message[1].as_str() {
                                "ArrowDown" => state.active_index.set((current + 1) % count),
                                "ArrowUp" => {
                                    state.active_index.set((current + count - 1) % count);
                                }
                                "Enter" => {
                                    let title = filter_items(&state.query.read(), gates)
                                        .get(current)
                                        .map(|item| item.title);
                                    if let Some(title) = title {
                                        state.apply(&ctx, &id, title);
                                    }
                                }
                                "Escape" => state.close(),
                                _ => {}
                            }
                        }
                        _ => {}
                    },
                    Ok(_) => {}
                    Err(_) => break,
                }
            }
        }
    });

    // Let the capture-phase JS listener know whether it should swallow keys.
    let editor_id_flag = editor_id.clone();
    use_effect(move || {
        let id = editor_id_flag.clone();
        let active = *state.open.read() && !filter_items(&state.query.read(), gates).is_empty();
        let _ = eval(&format!("window['__slash_open_{id}'] = {active};"));
    });

    // Keep the highlighted item scrolled into view.
    let editor_id_scroll = editor_id.clone();
    use_effect(move || {
        scroll_active_into_view(&editor_id_scroll, *state.active_index.read());
    });

    // The YouTube item collects a URL through the shared dialog, so the dialog
    // stays mounted even while the menu itself is hidden.
    let youtube_ctx = ctx.clone();
    let editor_id_youtube = editor_id.clone();
    let mut youtube_open = state.youtube_open;
    let youtube_dialog = rsx! {
        YouTubeDialog {
            open: *youtube_open.read(),
            on_submit: move |url: String| {
                restore_selection(&editor_id_youtube);
                editor_insert_youtube(&youtube_ctx, &url);
                youtube_open.set(false);
            },
            on_cancel: move |_| { youtube_open.set(false); },
        }
    };

    let pos = *state.position.read();
    if !show_slash_menu || !*state.open.read() || items.is_empty() || pos.is_none() {
        return youtube_dialog;
    }
    let pos = pos.unwrap_or_default();

    // Group items
    let mut groups: Vec<(&'static str, Vec<(usize, &'static SlashItem)>)> = Vec::new();
    let mut flat_index = 0usize;
    for item in &items {
        let entry = (flat_index, *item);
        if let Some(last) = groups.last_mut()
            && last.0 == item.group
        {
            last.1.push(entry);
            flat_index += 1;
            continue;
        }
        groups.push((item.group, vec![entry]));
        flat_index += 1;
    }

    let active_idx = *state.active_index.read();

    rsx! {
        div {
            "data-slot": "editor-slash-menu",
            onmousedown: preserve,
            style: "position: fixed; top: {pos.0}px; left: {pos.1}px; z-index: 50;",
            class: cn([
                "rounded bg-popover p-1 text-popover-foreground shadow-none ring ring-ring-active",
                props.class.as_deref().unwrap_or_default(),
            ]),
            div { class: "max-h-80 min-w-64 overflow-y-auto",
                for (group_name, group_items) in &groups {
                    div { class: "flex flex-col gap-1 p-1",
                        div {
                            class: "bg-muted/50 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                            "{group_name}"
                        }
                        for (idx, item) in group_items {
                            Button {
                                key: "{item.title}",
                                id: "slash-item-{editor_id}-{idx}",
                                variant: ButtonVariantType::Ghost,
                                class: cn([
                                    "flex h-auto w-full items-center justify-start gap-3 rounded px-2 py-2",
                                    if *idx == active_idx { "bg-accent text-accent-foreground" } else { "" },
                                ]),
                                onclick: {
                                    let title = item.title;
                                    let ctx = ctx.clone();
                                    let id = editor_id.clone();
                                    move |_| state.apply(&ctx, &id, title)
                                },
                                div { class: "flex size-8 items-center justify-center rounded bg-muted",
                                    {slash_icon(item.icon)}
                                }
                                div { class: "flex flex-col items-start",
                                    span { class: "text-sm font-medium", "{item.title}" }
                                    span { class: "text-xs text-muted-foreground", "{item.description}" }
                                }
                            }
                        }
                    }
                }
            }
        }
        {youtube_dialog}
    }
}
