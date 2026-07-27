use dioxus::document::eval;
use dioxus::prelude::*;

use super::EditorContext::use_editor_context;
use super::commands::EDITOR_INIT_JS;
use crate::utils::cn;

/// Tailwind prose styling for the editable surface.
fn prose_classes() -> &'static str {
    "outline-none \
     selection:bg-primary selection:text-light \
     [&>*:first-child]:mt-0 \
     [&_h1]:my-4 [&_h1]:text-xl [&_h1]:leading-tight [&_h1]:font-bold \
     [&_h2]:my-4 [&_h2]:text-lg [&_h2]:leading-tight [&_h2]:font-semibold \
     [&_h3]:my-4 [&_h3]:text-base [&_h3]:leading-tight [&_h3]:font-semibold \
     [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-6 \
     [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-6 \
     [&_li]:my-0.5 \
     [&_blockquote]:my-2 [&_blockquote]:border-l-2 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic \
     [&_a]:cursor-pointer [&_a]:text-secondary-400 [&_a]:underline \
     [&_img]:mx-auto [&_img]:my-6 [&_img]:max-w-full [&_img]:rounded \
     data-[empty=true]:before:pointer-events-none data-[empty=true]:before:float-left data-[empty=true]:before:h-0 \
     data-[empty=true]:before:text-sm data-[empty=true]:before:italic data-[empty=true]:before:text-muted-foreground/50 \
     data-[empty=true]:before:content-[attr(data-placeholder)]"
}

#[derive(Props, Clone, PartialEq)]
pub struct EditorContentProps {
    #[props(default)]
    pub class: Option<String>,
}

/// The `contentEditable` surface. Seeds initial content once and forwards
/// native events to the editor controller via JS `eval()`.
#[component]
pub fn EditorContent(props: EditorContentProps) -> Element {
    let ctx = use_editor_context();
    let editor_id = ctx.editor_id.read().clone();
    let editable = ctx.editable;
    let plain_text = ctx.plain_text;
    let placeholder = ctx.placeholder.clone();
    let initial_content = ctx.initial_content.clone();
    let is_empty = ctx.state.read().is_empty;
    let on_submit = ctx.on_submit;

    // Seed content and install execCommand defaults on first mount.
    let editor_id_init = editor_id.clone();
    let initial_for_init = initial_content.clone();
    use_effect(move || {
        let id = editor_id_init.clone();
        let content = initial_for_init.clone();
        let js = EDITOR_INIT_JS
            .replace("{id}", &id)
            .replace("__TASK_LIST_CLASS__", super::commands::TASK_LIST_CLASS)
            .replace("__TASK_ITEM_CLASS__", super::commands::TASK_ITEM_CLASS)
            .replace(
                "__TASK_CHECKBOX_CLASS__",
                super::commands::TASK_CHECKBOX_CLASS,
            )
            .replace(
                "__TASK_CHECKBOX_CHECKED_CLASS__",
                super::commands::TASK_CHECKBOX_CHECKED_CLASS,
            );
        let _ = eval(&js);

        // Set initial content if provided and non-empty
        if !content.is_empty() {
            let set_js = format!(
                r#"
                (function() {{
                  const el = document.getElementById('{id}');
                  if (el) {{
                    el.innerHTML = `{content}`;
                  }}
                }})()
                "#
            );
            let _ = eval(&set_js);
        }
    });

    // Native listeners the framework cannot express: the click handler needs the
    // real event target to find the task checkbox / anchor under the pointer, and
    // the paste handler needs the clipboard payload. Both push back through the
    // eval channel so the Rust side can refresh and emit.
    let refresh = ctx.refresh;
    let emit_change = ctx.emit_change;
    let editor_id_listeners = editor_id.clone();
    let task_checkbox_checked = super::commands::TASK_CHECKBOX_CHECKED_CLASS;
    use_future(move || {
        let id = editor_id_listeners.clone();
        async move {
            let js = format!(
                r#"
                (function() {{
                  const el = document.getElementById('{id}');
                  if (!el || window['__editor_dom_listeners_{id}']) return;
                  window['__editor_dom_listeners_{id}'] = true;
                  el.addEventListener('click', function(event) {{
                    const target = event.target;
                    if (!target || !target.closest) return;
                    const checkbox = target.closest('[data-checkbox]');
                    if (checkbox) {{
                      event.preventDefault();
                      const item = checkbox.closest('li');
                      if (!item) return;
                      const checked = item.getAttribute('data-checked') !== 'true';
                      item.setAttribute('data-checked', String(checked));
                      const classes = '{task_checkbox_checked}'.split(' ').filter(Boolean);
                      if (checked) {{
                        checkbox.classList.add(...classes);
                        checkbox.textContent = '✓';
                      }} else {{
                        checkbox.classList.remove(...classes);
                        checkbox.textContent = '';
                      }}
                      dioxus.send(true);
                      return;
                    }}
                    const anchor = target.closest('a[href]');
                    if (anchor && (!{editable} || event.metaKey || event.ctrlKey)) {{
                      event.preventDefault();
                      window.open(anchor.href, '_blank', 'noopener,noreferrer');
                    }}
                  }});
                  if ({plain_text}) {{
                    el.addEventListener('paste', function(event) {{
                      event.preventDefault();
                      const text = event.clipboardData.getData('text/plain');
                      document.execCommand('insertText', false, text);
                    }});
                  }}
                }})()
                "#
            );
            let mut listener = eval(&js);
            while listener.recv::<bool>().await.is_ok() {
                refresh.call(());
                emit_change.call(());
            }
        }
    });

    rsx! {
        div {
            id: "{editor_id}",
            "data-slot": "editor-content",
            tabindex: "0",
            role: "textbox",
            "aria-multiline": "true",
            contenteditable: if editable { "true" } else { "false" },
            spellcheck: "true",
            "data-empty": if is_empty { "true" } else { "false" },
            "data-placeholder": "{placeholder}",
            class: cn([prose_classes(), props.class.as_deref().unwrap_or_default()]),
            oninput: move |_| {
                refresh.call(());
                emit_change.call(());
            },
            onkeydown: move |event: KeyboardEvent| {
                if let Some(on_submit) = on_submit
                    && event.key() == Key::Enter
                    && !event.modifiers().shift()
                {
                    event.prevent_default();
                    on_submit.call(());
                }
            },
        }
    }
}
