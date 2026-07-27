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
use crate::components::editor::types::EditorAlignType;
use crate::hooks::use_preserve_selection;
use crate::utils::cn;

#[derive(Clone)]
struct SlashItem {
    title: &'static str,
    description: &'static str,
    group: &'static str,
}

const SLASH_ITEMS: &[SlashItem] = &[
    SlashItem {
        title: "Heading 1",
        description: "Large section heading",
        group: "Headings",
    },
    SlashItem {
        title: "Heading 2",
        description: "Medium section heading",
        group: "Headings",
    },
    SlashItem {
        title: "Heading 3",
        description: "Small section heading",
        group: "Headings",
    },
    SlashItem {
        title: "Bold",
        description: "Make text bold",
        group: "Text Formatting",
    },
    SlashItem {
        title: "Italic",
        description: "Make text italic",
        group: "Text Formatting",
    },
    SlashItem {
        title: "Underline",
        description: "Underline text",
        group: "Text Formatting",
    },
    SlashItem {
        title: "Strikethrough",
        description: "Strike through text",
        group: "Text Formatting",
    },
    SlashItem {
        title: "Subscript",
        description: "Make text subscript",
        group: "Text Formatting",
    },
    SlashItem {
        title: "Superscript",
        description: "Make text superscript",
        group: "Text Formatting",
    },
    SlashItem {
        title: "Align Left",
        description: "Align text to the left",
        group: "Alignment",
    },
    SlashItem {
        title: "Align Center",
        description: "Center align text",
        group: "Alignment",
    },
    SlashItem {
        title: "Align Right",
        description: "Align text to the right",
        group: "Alignment",
    },
    SlashItem {
        title: "Justify",
        description: "Justify text",
        group: "Alignment",
    },
    SlashItem {
        title: "Bullet List",
        description: "Create a bullet list",
        group: "Lists",
    },
    SlashItem {
        title: "Numbered List",
        description: "Create a numbered list",
        group: "Lists",
    },
    SlashItem {
        title: "Task List",
        description: "Create a task list with checkboxes",
        group: "Lists",
    },
    SlashItem {
        title: "Paragraph",
        description: "Convert to paragraph",
        group: "Blocks",
    },
    SlashItem {
        title: "Blockquote",
        description: "Create a blockquote",
        group: "Blocks",
    },
    SlashItem {
        title: "YouTube",
        description: "Embed a YouTube video",
        group: "Media",
    },
    SlashItem {
        title: "Undo",
        description: "Undo the last action",
        group: "History",
    },
    SlashItem {
        title: "Redo",
        description: "Redo the last undone action",
        group: "History",
    },
];

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

#[derive(Props, Clone, PartialEq)]
pub struct SlashMenuProps {
    #[props(default)]
    pub class: Option<String>,
}

/// Slash-command menu. Monitors the editor for a `/` trigger, shows a
/// filterable keyboard-navigable item list, and runs the selected command.
///
/// **Gap**: The TS version uses DOM TreeWalker + Range manipulation to detect
/// the slash trigger precisely; this Rust port uses a JS eval listener.
#[component]
pub fn SlashMenu(props: SlashMenuProps) -> Element {
    let ctx = use_editor_context();
    let show_slash_menu = ctx.show_slash_menu;
    let show_headings = ctx.show_headings;
    let show_history = ctx.show_history;
    let show_media = ctx.show_media;
    let editor_id = ctx.editor_id.read().clone();

    let mut open = use_signal(|| false);
    let mut query = use_signal(String::new);
    let mut active_index: Signal<usize> = use_signal(|| 0);
    let mut position: Signal<Option<(f64, f64)>> = use_signal(|| None);
    let mut youtube_open = use_signal(|| false);
    let preserve = use_preserve_selection();

    let gate_headings = show_headings;
    let gate_history = show_history;
    let gate_media = show_media;

    let items: Vec<&SlashItem> = {
        let q = query.read().to_lowercase();
        SLASH_ITEMS
            .iter()
            .filter(|item| {
                if !gate_headings && item.group == "Headings" {
                    return false;
                }
                if !gate_history && item.group == "History" {
                    return false;
                }
                if !gate_media && item.group == "Media" {
                    return false;
                }
                q.is_empty()
                    || item.title.to_lowercase().contains(&*q)
                    || item.description.to_lowercase().contains(&*q)
            })
            .collect()
    };

    // Install input listener to detect "/" trigger.
    let editor_id_listener = editor_id.clone();
    use_future(move || {
        let id = editor_id_listener.clone();
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
                  function check() {{
                    const sel = window.getSelection();
                    if (!sel || sel.rangeCount === 0 || !sel.isCollapsed || !root.contains(sel.anchorNode)) {{
                      dioxus.send(['', 0.0, 0.0]);
                      return;
                    }}
                    const node = sel.anchorNode;
                    if (node.nodeType !== 3) {{ dioxus.send(['', 0.0, 0.0]); return; }}
                    const before = (node.textContent || '').slice(0, sel.anchorOffset);
                    const m = before.match(/(?:^|\s)\/([^\s\/]*)$/);
                    if (!m) {{ dioxus.send(['', 0.0, 0.0]); return; }}
                    const range = sel.getRangeAt(0);
                    const rect = range.getBoundingClientRect();
                    dioxus.send([m[1] || '', rect.bottom + 4, rect.left]);
                  }}
                  root.addEventListener('input', check);
                  document.addEventListener('selectionchange', check);
                }})()
                "#
            );
            let mut listener = eval(&js);
            loop {
                match listener.recv::<Vec<String>>().await {
                    Ok(arr) if arr.len() >= 3 => {
                        let q_val = arr[0].clone();
                        let top: f64 = arr[1].parse().unwrap_or(0.0);
                        let left: f64 = arr[2].parse().unwrap_or(0.0);
                        if top > 0.0 {
                            query.set(q_val);
                            active_index.set(0);
                            open.set(true);
                            position.set(Some((top, left)));
                        } else {
                            open.set(false);
                        }
                    }
                    _ => break,
                }
            }
        }
    });

    // The YouTube item collects a URL through the shared dialog, so the dialog
    // stays mounted even while the menu itself is hidden.
    let youtube_ctx = ctx.clone();
    let youtube_dialog = rsx! {
        YouTubeDialog {
            open: *youtube_open.read(),
            on_submit: move |url: String| {
                editor_insert_youtube(&youtube_ctx, &url);
                youtube_open.set(false);
            },
            on_cancel: move |_| { youtube_open.set(false); },
        }
    };

    let pos = *position.read();
    if !show_slash_menu || !*open.read() || items.is_empty() || pos.is_none() {
        return youtube_dialog;
    }
    let pos = pos.unwrap_or_default();

    // Group items
    let mut groups: Vec<(&'static str, Vec<(usize, &&SlashItem)>)> = Vec::new();
    let mut flat_index = 0usize;
    for item in &items {
        let entry = (flat_index, item);
        if let Some(last) = groups.last_mut() {
            if last.0 == item.group {
                last.1.push(entry);
                flat_index += 1;
                continue;
            }
        }
        groups.push((item.group, vec![entry]));
        flat_index += 1;
    }

    let active_idx = *active_index.read();

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
                            button {
                                key: "{item.title}",
                                r#type: "button",
                                class: cn([
                                    "flex h-auto w-full items-center justify-start gap-3 rounded px-2 py-2 hover:bg-accent",
                                    if *idx == active_idx { "bg-accent text-accent-foreground" } else { "" },
                                ]),
                                onclick: {
                                    let title = item.title;
                                    let ctx = ctx.clone();
                                    move |_| {
                                        open.set(false);
                                        query.set(String::new());
                                        if title == "YouTube" {
                                            youtube_open.set(true);
                                        } else {
                                            run_slash_command(&ctx, title);
                                        }
                                    }
                                },
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
