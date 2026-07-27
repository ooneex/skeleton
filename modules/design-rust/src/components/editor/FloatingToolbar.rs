use dioxus::document::eval;
use dioxus::prelude::*;

use super::EditorContext::use_editor_context;
use super::Toolbar::{
    EditorBlockquote, EditorBold, EditorColor, EditorHighlight, EditorItalic, EditorLink,
    EditorParagraph, EditorStrike, EditorSubscript, EditorSuperscript, EditorUnderline,
};
use crate::hooks::use_preserve_selection;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct FloatingToolbarProps {
    #[props(default)]
    pub class: Option<String>,
}

/// Bubble menu that floats above the current text selection. Appears while a
/// non-empty range is selected inside an editable editor.
///
/// **Gap**: The TS version uses `createPortal(document.body)` for correct
/// stacking. This Rust port renders inline with `position: fixed` which
/// achieves the same visual result without a portal API.
#[component]
pub fn FloatingToolbar(props: FloatingToolbarProps) -> Element {
    let ctx = use_editor_context();
    let editable = ctx.editable;
    let editor_id = ctx.editor_id.read().clone();

    // [top, left, visible: 0|1]
    let mut position: Signal<Option<(f64, f64)>> = use_signal(|| None);
    let preserve = use_preserve_selection();

    // Poll selection position via eval in a future loop.
    let editor_id_for_listener = editor_id.clone();
    use_future(move || {
        let id = editor_id_for_listener.clone();
        async move {
            if !editable {
                return;
            }
            let js = format!(
                r#"
                (function() {{
                  if (window['__ft_listener_{id}']) return;
                  window['__ft_listener_{id}'] = true;
                  document.addEventListener('selectionchange', function() {{
                    const root = document.getElementById('{id}');
                    if (!root) return;
                    const sel = window.getSelection();
                    if (!sel || sel.rangeCount === 0 || sel.isCollapsed || !root.contains(sel.anchorNode)) {{
                      dioxus.send([0.0, 0.0, 0.0]);
                      return;
                    }}
                    const range = sel.getRangeAt(0);
                    const rects = range.getClientRects();
                    const rect = rects.length > 0 ? rects[rects.length - 1] : range.getBoundingClientRect();
                    if (!rect || (!rect.width && !rect.height)) {{
                      dioxus.send([0.0, 0.0, 0.0]);
                      return;
                    }}
                    dioxus.send([rect.top, rect.left + rect.width / 2, 1.0]);
                  }});
                }})()
                "#
            );
            let mut listener = eval(&js);
            loop {
                match listener.recv::<Vec<f64>>().await {
                    Ok(arr) if arr.len() >= 3 => {
                        if arr[2] > 0.5 {
                            position.set(Some((arr[0], arr[1])));
                        } else {
                            position.set(None);
                        }
                    }
                    _ => break,
                }
            }
        }
    });

    let pos = *position.read();
    match pos {
        None => rsx! {},
        Some((top, left)) => {
            rsx! {
                div {
                    role: "toolbar",
                    "aria-label": "Text formatting",
                    "data-slot": "editor-floating-toolbar",
                    onmousedown: preserve,
                    style: "position: fixed; top: {top}px; left: {left}px; transform: translate(-50%, calc(-100% - 8px)); z-index: 50;",
                    class: cn([
                        "flex items-center gap-1 rounded bg-popover p-1 text-popover-foreground shadow-md",
                        props.class.as_deref().unwrap_or_default(),
                    ]),
                    EditorParagraph {}
                    EditorBold {}
                    EditorItalic {}
                    EditorUnderline {}
                    EditorStrike {}
                    EditorSubscript {}
                    EditorSuperscript {}
                    EditorColor {}
                    EditorHighlight {}
                    EditorBlockquote {}
                    EditorLink {}
                }
            }
        }
    }
}
