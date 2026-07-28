use dioxus::document::eval;

/// Tailwind classes applied to editor-generated task list structures.
pub const TASK_LIST_CLASS: &str = "m-0 flex list-none flex-col gap-1 !p-0";
pub const TASK_ITEM_CLASS: &str = "flex items-start gap-2";
pub const TASK_CHECKBOX_CLASS: &str = "mt-1 inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded border border-border text-[10px] leading-none select-none";
pub const TASK_CHECKBOX_CHECKED_CLASS: &str = "border-primary bg-primary text-primary-foreground";
pub const YOUTUBE_CLASS: &str = "my-4 aspect-video w-full max-w-md overflow-hidden rounded";

/// The JS snippet that the EditorContent runs once to install helpers on the
/// editor element. Kept here so EditorContext and commands share the same
/// source of truth.
pub const EDITOR_INIT_JS: &str = r#"
(function(id) {
  try { document.execCommand('defaultParagraphSeparator', false, 'p'); } catch(e) {}
  const el = document.getElementById(id);
  if (!el) return;
  if (!el.innerHTML.trim()) {
    el.innerHTML = '<p><br></p>';
  }
  // Normalize task-list items loaded from persisted HTML.
  el.querySelectorAll('ul[data-type="taskList"]').forEach(list => {
    list.className = '__TASK_LIST_CLASS__';
    list.querySelectorAll(':scope > li').forEach(item => {
      item.className = '__TASK_ITEM_CLASS__';
      const checked = item.getAttribute('data-checked') === 'true';
      let box = item.querySelector('[data-checkbox]');
      if (!box) {
        box = document.createElement('span');
        box.setAttribute('data-checkbox', '');
        box.setAttribute('contenteditable', 'false');
        item.prepend(box);
      }
      box.className = '__TASK_CHECKBOX_CLASS__';
      box.setAttribute('contenteditable', 'false');
      if (checked) {
        box.classList.add(...'__TASK_CHECKBOX_CHECKED_CLASS__'.split(' '));
        box.textContent = '✓';
      } else {
        box.classList.remove(...'__TASK_CHECKBOX_CHECKED_CLASS__'.split(' '));
        box.textContent = '';
      }
    });
  });
})('{id}')
"#;

/// Build [`EDITOR_INIT_JS`] for a given editor element, with the Tailwind
/// task-list classes substituted in.
pub fn editor_init_js(editor_id: &str) -> String {
    EDITOR_INIT_JS
        .replace("{id}", editor_id)
        .replace("__TASK_LIST_CLASS__", TASK_LIST_CLASS)
        .replace("__TASK_ITEM_CLASS__", TASK_ITEM_CLASS)
        .replace("__TASK_CHECKBOX_CLASS__", TASK_CHECKBOX_CLASS)
        .replace(
            "__TASK_CHECKBOX_CHECKED_CLASS__",
            TASK_CHECKBOX_CHECKED_CLASS,
        )
}

/// JS that computes a compact state array and sends it back via `dioxus.send`.
/// The array has exactly 20 elements; each element is a string.
///
/// Layout:
/// 0  bold, 1  italic, 2  underline, 3  strike, 4  subscript, 5  superscript,
/// 6  link, 7  blockquote, 8  paragraph, 9  heading_level (""|"1"|"2"|"3"),
/// 10 bullet_list, 11 ordered_list, 12 task_list,
/// 13 align ("left"|"center"|"right"|"justify"),
/// 14 color, 15 highlight,
/// 16 can_undo, 17 can_redo, 18 is_empty, 19 link_href
pub const COMPUTE_STATE_JS: &str = r#"
(function(id) {
  const root = document.getElementById(id);
  if (!root) { dioxus.send(null); return; }
  const sel = window.getSelection();
  const inside = sel && sel.rangeCount > 0 && root.contains(sel.anchorNode);
  const s = cmd => { try { return inside ? (document.queryCommandState(cmd) ? '1':'0') : '0'; } catch(e) { return '0'; } };
  const en = cmd => { try { return (document.queryCommandEnabled(cmd) ? '1':'0'); } catch(e) { return '0'; } };

  function getBlock() {
    if (!sel || sel.rangeCount === 0 || !root.contains(sel.anchorNode)) return null;
    let node = sel.anchorNode;
    if (node.nodeType === 3) node = node.parentElement;
    const tags = new Set(['P','H1','H2','H3','H4','H5','H6','BLOCKQUOTE','LI','DIV','PRE']);
    while (node && root.contains(node) && node !== root) {
      if (tags.has(node.tagName)) return node;
      node = node.parentElement;
    }
    return null;
  }
  function closest(selector) {
    if (!sel || sel.rangeCount === 0 || !root.contains(sel.anchorNode)) return null;
    let node = sel.anchorNode;
    if (node.nodeType === 3) node = node.parentElement;
    while (node && root.contains(node)) {
      if (node !== root && node.matches && node.matches(selector)) return node;
      node = node.parentElement;
    }
    return null;
  }
  function getInlineStyle(prop) {
    if (!inside) return '';
    let node = sel.anchorNode;
    if (node.nodeType === 3) node = node.parentElement;
    while (node && root.contains(node) && node !== root) {
      const v = node.style && node.style[prop];
      if (v) return v;
      node = node.parentElement;
    }
    return '';
  }

  const block = getBlock();
  const anchor = closest('a');
  const hlevel = block && /^H[123]$/.test(block.tagName) ? block.tagName[1] : '';
  const taskList = !!closest('ul[data-type="taskList"]');
  const bulletList = !!closest('ul') && !taskList;
  const orderedList = !!closest('ol');
  const align = (() => {
    if (!block) return 'left';
    const raw = block.style.textAlign || getComputedStyle(block).textAlign || 'left';
    if (raw === 'start') return 'left';
    if (raw === 'end') return 'right';
    if (['center','right','justify'].includes(raw)) return raw;
    return 'left';
  })();

  const isEmpty = (() => {
    if (root.querySelector('img,iframe,[data-youtube],[data-checkbox],hr')) return '0';
    return (root.textContent || '').replace(/\u200b/g,'').trim().length === 0 ? '1' : '0';
  })();

  dioxus.send([
    s('bold'), s('italic'), s('underline'), s('strikeThrough'),
    s('subscript'), s('superscript'),
    anchor ? '1' : '0',
    !!closest('blockquote') ? '1' : '0',
    (block && block.tagName === 'P') ? '1' : '0',
    hlevel,
    bulletList ? '1' : '0',
    orderedList ? '1' : '0',
    taskList ? '1' : '0',
    align,
    getInlineStyle('color'),
    getInlineStyle('backgroundColor'),
    en('undo'), en('redo'),
    isEmpty,
    anchor ? (anchor.getAttribute('href') || '') : ''
  ]);
})('{id}')
"#;

/// Snapshot the current selection so it can be restored after focus moves away
/// (e.g. while a dialog is open).
///
/// The TS counterpart (`saveSelection`) returns a cloned `Range` to the caller.
/// A `Range` cannot cross the JS boundary, so the clone is parked on `window`
/// under a per-editor key and [`restore_selection`] reads it back — the range
/// stays valid exactly as long as the TS one does, i.e. while the editor DOM is
/// untouched.
pub fn save_selection(editor_id: &str) {
    let _ = eval(&format!(
        r#"
        (function() {{
          const root = document.getElementById('{editor_id}');
          const sel = window.getSelection();
          if (!sel || sel.rangeCount === 0 || !root || !root.contains(sel.anchorNode)) {{
            window['__editor_saved_range_{editor_id}'] = null;
            return;
          }}
          window['__editor_saved_range_{editor_id}'] = sel.getRangeAt(0).cloneRange();
        }})()
        "#
    ));
}

/// Restore a selection previously captured with [`save_selection`]. Focuses the
/// editor first, because the caret can only be placed inside a focused
/// `contentEditable` surface.
pub fn restore_selection(editor_id: &str) {
    let _ = eval(&format!(
        r#"
        (function() {{
          const range = window['__editor_saved_range_{editor_id}'];
          if (!range) return;
          const root = document.getElementById('{editor_id}');
          if (root) root.focus();
          const sel = window.getSelection();
          if (!sel) return;
          sel.removeAllRanges();
          sel.addRange(range);
        }})()
        "#
    ));
}
