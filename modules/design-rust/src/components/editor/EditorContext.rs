use dioxus::document::eval;
use dioxus::prelude::*;

use super::commands::{
    COMPUTE_STATE_JS, TASK_CHECKBOX_CLASS, TASK_ITEM_CLASS, TASK_LIST_CLASS, YOUTUBE_CLASS,
};
use super::types::{EditorAlignType, EditorStateType, empty_editor_state};
use crate::hooks::use_id;

// ── YouTube URL helpers (inlined from @ooneex/youtube-utils) ─────────────────

fn extract_youtube_id(url: &str) -> Option<&str> {
    // youtu.be/<id>
    if let Some(pos) = url.find("youtu.be/") {
        let rest = &url[pos + 9..];
        let end = rest
            .find(|c: char| c == '?' || c == '&' || c == '#')
            .unwrap_or(rest.len());
        let id = &rest[..end];
        if !id.is_empty() {
            return Some(id);
        }
    }
    // ?v=<id> or &v=<id>
    if let Some(pos) = url.find("v=") {
        let rest = &url[pos + 2..];
        let end = rest
            .find(|c: char| c == '&' || c == '#')
            .unwrap_or(rest.len());
        let id = &rest[..end];
        if !id.is_empty() {
            return Some(id);
        }
    }
    None
}

fn youtube_embed_url(url: &str) -> Option<String> {
    extract_youtube_id(url).map(|id| format!("https://www.youtube.com/embed/{id}"))
}

// ── Context ──────────────────────────────────────────────────────────────────

/// Shared state handed to every sub-component of the editor tree.
#[derive(Clone)]
pub struct EditorContext {
    /// Stable `id` attribute on the `contentEditable` div.
    pub editor_id: Signal<String>,
    /// Current selection / formatting snapshot.
    pub state: Signal<EditorStateType>,
    /// Initial HTML content (captured once on mount; ignored afterwards).
    pub initial_content: String,
    pub editable: bool,
    pub plain_text: bool,
    pub placeholder: String,
    pub show_headings: bool,
    pub show_history: bool,
    pub show_media: bool,
    pub show_slash_menu: bool,
    /// Trigger a state refresh from any sub-component.
    pub refresh: Callback<()>,
    /// Fire the user-facing `on_content_change` callback.
    pub emit_change: Callback<()>,
    /// User-facing submit callback. When set, pressing `Enter` without `Shift`
    /// inside the editable surface fires it instead of inserting a line break.
    pub on_submit: Option<EventHandler<()>>,
}

impl EditorContext {
    /// Run an exec-command JS snippet and refresh state afterwards.
    pub fn run_command(&self, js: String) {
        let id = self.editor_id.read().clone();
        let refresh = self.refresh.clone();
        let emit = self.emit_change.clone();
        let js_focus_run = format!(
            r#"
            (function() {{
              const el = document.getElementById('{id}');
              if (el) {{
                el.focus();
                {js}
              }}
            }})()
            "#,
        );
        let _ = eval(&js_focus_run);
        refresh.call(());
        emit.call(());
    }
}

pub fn use_editor_context() -> EditorContext {
    use_context::<EditorContext>()
}

// ── Provider props ───────────────────────────────────────────────────────────

#[derive(Props, Clone, PartialEq)]
pub struct EditorProviderProps {
    #[props(default)]
    pub content: Option<String>,
    #[props(default = true)]
    pub editable: bool,
    #[props(default)]
    pub plain_text: bool,
    #[props(default)]
    pub placeholder: Option<String>,
    #[props(default = true)]
    pub show_headings: bool,
    #[props(default = true)]
    pub show_history: bool,
    #[props(default = true)]
    pub show_media: bool,
    #[props(default = true)]
    pub show_slash_menu: bool,
    #[props(default)]
    pub on_content_change: Option<EventHandler<String>>,
    #[props(default)]
    pub on_submit: Option<EventHandler<()>>,
    pub children: Element,
}

/// Editor provider. Owns the selection state signal and exposes the controller
/// through [`EditorContext`].
#[component]
pub fn EditorProvider(props: EditorProviderProps) -> Element {
    let editor_id = use_id("editor");
    let editor_id_sig = use_signal(|| editor_id.clone());

    let state: Signal<EditorStateType> = use_signal(empty_editor_state);

    let on_content_change = props.on_content_change.clone();
    let editor_id_for_refresh = editor_id.clone();
    let editor_id_for_emit = editor_id.clone();

    // refresh: pull state from the DOM via eval
    let refresh_cb = use_callback(move |_: ()| {
        let id = editor_id_for_refresh.clone();
        let js = COMPUTE_STATE_JS.replace("{id}", &id);
        let mut ev = eval(&js);
        let mut state = state;
        spawn(async move {
            if let Ok(arr) = ev.recv::<Vec<String>>().await {
                if arr.len() >= 20 {
                    let new_state = EditorStateType {
                        bold: arr[0] == "1",
                        italic: arr[1] == "1",
                        underline: arr[2] == "1",
                        strike: arr[3] == "1",
                        subscript: arr[4] == "1",
                        superscript: arr[5] == "1",
                        link: arr[6] == "1",
                        link_href: arr[19].clone(),
                        blockquote: arr[7] == "1",
                        paragraph: arr[8] == "1",
                        heading_level: match arr[9].as_str() {
                            "1" => Some(1),
                            "2" => Some(2),
                            "3" => Some(3),
                            _ => None,
                        },
                        bullet_list: arr[10] == "1",
                        ordered_list: arr[11] == "1",
                        task_list: arr[12] == "1",
                        align: EditorAlignType::from_str(&arr[13]),
                        color: arr[14].clone(),
                        highlight: arr[15].clone(),
                        can_undo: arr[16] == "1",
                        can_redo: arr[17] == "1",
                        is_empty: arr[18] == "1",
                    };
                    state.set(new_state);
                }
            }
        });
    });

    // emit_change: read innerHTML and call the user callback
    let emit_cb = use_callback(move |_: ()| {
        if let Some(ref cb) = on_content_change {
            let id = editor_id_for_emit.clone();
            let cb = cb.clone();
            let js = format!(
                r#"
                (function() {{
                  const el = document.getElementById('{id}');
                  if (!el) {{ dioxus.send(''); return; }}
                  // Check empty
                  if (el.querySelector('img,iframe,[data-youtube],[data-checkbox],hr') ||
                      (el.textContent || '').replace(/\u200b/g,'').trim().length > 0) {{
                    dioxus.send(el.innerHTML.trim());
                  }} else {{
                    dioxus.send('');
                  }}
                }})()
                "#
            );
            let mut ev = eval(&js);
            spawn(async move {
                if let Ok(html) = ev.recv::<String>().await {
                    cb.call(html);
                }
            });
        }
    });

    let initial_content = props.content.clone().unwrap_or_default();
    let placeholder = props.placeholder.clone().unwrap_or_else(|| {
        if props.show_slash_menu && !props.plain_text {
            "Type something or '/' to start".into()
        } else {
            "Type something...".into()
        }
    });

    let ctx = EditorContext {
        editor_id: editor_id_sig,
        state,
        initial_content: initial_content.clone(),
        editable: props.editable,
        plain_text: props.plain_text,
        placeholder,
        show_headings: props.show_headings,
        show_history: props.show_history,
        show_media: props.show_media,
        show_slash_menu: props.show_slash_menu,
        refresh: refresh_cb,
        emit_change: emit_cb,
        on_submit: props.on_submit,
    };
    use_context_provider(|| ctx);

    // Install the selectionchange listener once after mount.
    let editor_id_listener = editor_id.clone();
    let refresh_for_listener = refresh_cb.clone();
    use_future(move || {
        let id = editor_id_listener.clone();
        let refresh = refresh_for_listener.clone();
        async move {
            let js = format!(
                r#"
                (function() {{
                  if (window['__sel_listener_{id}']) return;
                  window['__sel_listener_{id}'] = true;
                  document.addEventListener('selectionchange', function() {{
                    const root = document.getElementById('{id}');
                    if (!root) return;
                    const sel = window.getSelection();
                    if (sel && sel.rangeCount > 0 && root.contains(sel.anchorNode)) {{
                      dioxus.send(true);
                    }}
                  }});
                }})()
                "#
            );
            let mut listener = eval(&js);
            while listener.recv::<bool>().await.is_ok() {
                refresh.call(());
            }
        }
    });

    rsx! { {props.children} }
}

// ── Imperative commands (exported free functions) ─────────────────────────────

/// Escape a string for safe insertion into HTML attribute values.
fn escape_html(s: &str) -> String {
    s.replace('&', "&amp;")
        .replace('"', "&quot;")
        .replace('<', "&lt;")
        .replace('>', "&gt;")
}

pub fn editor_toggle_bold(ctx: &EditorContext) {
    ctx.run_command("document.execCommand('bold', false, null);".into());
}
pub fn editor_toggle_italic(ctx: &EditorContext) {
    ctx.run_command("document.execCommand('italic', false, null);".into());
}
pub fn editor_toggle_underline(ctx: &EditorContext) {
    ctx.run_command("document.execCommand('underline', false, null);".into());
}
pub fn editor_toggle_strike(ctx: &EditorContext) {
    ctx.run_command("document.execCommand('strikeThrough', false, null);".into());
}
pub fn editor_toggle_subscript(ctx: &EditorContext) {
    ctx.run_command("document.execCommand('subscript', false, null);".into());
}
pub fn editor_toggle_superscript(ctx: &EditorContext) {
    ctx.run_command("document.execCommand('superscript', false, null);".into());
}

pub fn editor_set_color(ctx: &EditorContext, color: &str) {
    let color = escape_html(color);
    ctx.run_command(format!(
        "document.execCommand('styleWithCSS', false, 'true'); document.execCommand('foreColor', false, '{color}');"
    ));
}
pub fn editor_unset_color(ctx: &EditorContext) {
    let id = ctx.editor_id.read().clone();
    ctx.run_command(format!(
        r#"
        (function() {{
          const root = document.getElementById('{id}');
          if (!root) return;
          const sel = window.getSelection();
          if (!sel || sel.rangeCount === 0) return;
          const range = sel.getRangeAt(0);
          const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {{
            acceptNode: n => (n.style && n.style.color && range.intersectsNode(n)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
          }});
          const nodes = [];
          let c = walker.nextNode();
          while (c) {{ nodes.push(c); c = walker.nextNode(); }}
          nodes.forEach(n => {{
            n.style.color = '';
            if (!n.getAttribute('style')) n.removeAttribute('style');
            if (n.tagName === 'SPAN' && n.attributes.length === 0) {{
              const p = n.parentNode;
              if (p) {{ while (n.firstChild) p.insertBefore(n.firstChild, n); p.removeChild(n); }}
            }}
          }});
        }})()
        "#
    ));
}
pub fn editor_set_highlight(ctx: &EditorContext, color: &str) {
    let color = escape_html(color);
    ctx.run_command(format!(
        "document.execCommand('styleWithCSS', false, 'true'); document.execCommand('hiliteColor', false, '{color}');"
    ));
}
pub fn editor_unset_highlight(ctx: &EditorContext) {
    let id = ctx.editor_id.read().clone();
    ctx.run_command(format!(
        r#"
        (function() {{
          const root = document.getElementById('{id}');
          if (!root) return;
          const sel = window.getSelection();
          if (!sel || sel.rangeCount === 0) return;
          const range = sel.getRangeAt(0);
          const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {{
            acceptNode: n => (n.style && n.style.backgroundColor && range.intersectsNode(n)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
          }});
          const nodes = [];
          let c = walker.nextNode();
          while (c) {{ nodes.push(c); c = walker.nextNode(); }}
          nodes.forEach(n => {{
            n.style.backgroundColor = '';
            if (!n.getAttribute('style')) n.removeAttribute('style');
            if (n.tagName === 'SPAN' && n.attributes.length === 0) {{
              const p = n.parentNode;
              if (p) {{ while (n.firstChild) p.insertBefore(n.firstChild, n); p.removeChild(n); }}
            }}
          }});
        }})()
        "#
    ));
}

pub fn editor_set_link(ctx: &EditorContext, href: &str) {
    let escaped = escape_html(href);
    let id = ctx.editor_id.read().clone();
    ctx.run_command(format!(
        r#"
        (function() {{
          const root = document.getElementById('{id}');
          if (!root) return;
          const sel = window.getSelection();
          if (sel && !sel.isCollapsed) {{
            document.execCommand('createLink', false, '{escaped}');
          }} else {{
            document.execCommand('insertHTML', false, '<a href="{escaped}">{escaped}</a>');
          }}
          root.querySelectorAll('a[href]').forEach(a => {{
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
          }});
        }})()
        "#
    ));
}
pub fn editor_unset_link(ctx: &EditorContext) {
    ctx.run_command("document.execCommand('unlink', false, null);".into());
}

pub fn editor_set_paragraph(ctx: &EditorContext) {
    ctx.run_command("document.execCommand('formatBlock', false, '<p>');".into());
}
pub fn editor_toggle_heading(ctx: &EditorContext, level: u8) {
    let id = ctx.editor_id.read().clone();
    ctx.run_command(format!(
        r#"
        (function() {{
          const root = document.getElementById('{id}');
          if (!root) return;
          const sel = window.getSelection();
          if (!sel || sel.rangeCount === 0) return;
          let node = sel.anchorNode;
          if (node && node.nodeType === 3) node = node.parentElement;
          const tags = new Set(['P','H1','H2','H3','H4','H5','H6','BLOCKQUOTE','LI','DIV','PRE']);
          while (node && root.contains(node) && node !== root) {{
            if (tags.has(node.tagName)) break;
            node = node.parentElement;
          }}
          const active = node && node.tagName === 'H{level}';
          document.execCommand('formatBlock', false, active ? '<p>' : '<h{level}>');
        }})()
        "#
    ));
}
pub fn editor_toggle_blockquote(ctx: &EditorContext) {
    let id = ctx.editor_id.read().clone();
    ctx.run_command(format!(
        r#"
        (function() {{
          const root = document.getElementById('{id}');
          if (!root) return;
          const sel = window.getSelection();
          let node = sel && sel.anchorNode;
          if (node && node.nodeType === 3) node = node.parentElement;
          let active = false;
          while (node && root.contains(node)) {{
            if (node !== root && node.matches && node.matches('blockquote')) {{ active = true; break; }}
            node = node.parentElement;
          }}
          document.execCommand('formatBlock', false, active ? '<p>' : '<blockquote>');
        }})()
        "#
    ));
}
pub fn editor_toggle_bullet_list(ctx: &EditorContext) {
    ctx.run_command("document.execCommand('insertUnorderedList', false, null);".into());
}
pub fn editor_toggle_ordered_list(ctx: &EditorContext) {
    ctx.run_command("document.execCommand('insertOrderedList', false, null);".into());
}
pub fn editor_toggle_task_list(ctx: &EditorContext) {
    let id = ctx.editor_id.read().clone();
    let task_list_class = TASK_LIST_CLASS;
    let task_item_class = TASK_ITEM_CLASS;
    let task_checkbox_class = TASK_CHECKBOX_CLASS;
    ctx.run_command(format!(
        r#"
        (function() {{
          const root = document.getElementById('{id}');
          if (!root) return;
          const sel = window.getSelection();
          let node = sel && sel.anchorNode;
          if (node && node.nodeType === 3) node = node.parentElement;
          let taskList = null;
          let cur = node;
          while (cur && root.contains(cur)) {{
            if (cur !== root && cur.matches && cur.matches('ul[data-type="taskList"]')) {{ taskList = cur; break; }}
            cur = cur.parentElement;
          }}
          if (taskList) {{
            const frag = document.createDocumentFragment();
            taskList.querySelectorAll(':scope > li').forEach(item => {{
              const p = document.createElement('p');
              const content = item.querySelector('[data-content]') || item;
              p.innerHTML = content.innerHTML || '<br>';
              frag.appendChild(p);
            }});
            taskList.replaceWith(frag);
            return;
          }}
          // Find current block
          let block = node;
          const btags = new Set(['P','H1','H2','H3','H4','H5','H6','BLOCKQUOTE','LI','DIV','PRE']);
          while (block && root.contains(block) && block !== root) {{
            if (btags.has(block.tagName)) break;
            block = block.parentElement;
          }}
          if (!block || block === root) return;
          const list = document.createElement('ul');
          list.setAttribute('data-type', 'taskList');
          list.className = '{task_list_class}';
          const item = document.createElement('li');
          item.setAttribute('data-checked', 'false');
          item.className = '{task_item_class}';
          const box = document.createElement('span');
          box.setAttribute('data-checkbox', '');
          box.setAttribute('contenteditable', 'false');
          box.className = '{task_checkbox_class}';
          box.textContent = '';
          const content = document.createElement('div');
          content.setAttribute('data-content', '');
          content.className = 'flex-1';
          content.innerHTML = block.innerHTML || '<br>';
          item.append(box, content);
          list.appendChild(item);
          block.replaceWith(list);
          // Place caret at end of content
          const range = document.createRange();
          range.selectNodeContents(content);
          range.collapse(false);
          sel.removeAllRanges();
          sel.addRange(range);
        }})()
        "#
    ));
}
pub fn editor_set_text_align(ctx: &EditorContext, align: EditorAlignType) {
    let cmd = match align {
        EditorAlignType::Left => "justifyLeft",
        EditorAlignType::Center => "justifyCenter",
        EditorAlignType::Right => "justifyRight",
        EditorAlignType::Justify => "justifyFull",
    };
    ctx.run_command(format!("document.execCommand('{cmd}', false, null);"));
}

pub fn editor_undo(ctx: &EditorContext) {
    ctx.run_command("document.execCommand('undo', false, null);".into());
}
pub fn editor_redo(ctx: &EditorContext) {
    ctx.run_command("document.execCommand('redo', false, null);".into());
}

pub fn editor_insert_youtube(ctx: &EditorContext, url: &str) {
    if let Some(embed) = youtube_embed_url(url) {
        let escaped = escape_html(&embed);
        let youtube_class = YOUTUBE_CLASS;
        ctx.run_command(format!(
            r#"document.execCommand('insertHTML', false, '<div data-youtube contenteditable="false" class="{youtube_class}"><iframe class="h-full w-full rounded" src="{escaped}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p><br></p>');"#
        ));
    }
}
