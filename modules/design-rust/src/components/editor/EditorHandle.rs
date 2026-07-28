use std::collections::HashMap;

use dioxus::document::eval;
use dioxus::prelude::*;

use super::EditorContext::{
    editor_compute_state, editor_get_content, editor_get_selection, editor_run_command,
};
use super::commands::editor_init_js;
use super::types::{
    EditorActiveAttributesType, EditorActiveNameType, EditorBlockType, EditorMarkType,
};

/// Quote a value as a single-quoted JavaScript string literal.
fn js_quote(value: &str) -> String {
    let mut out = String::with_capacity(value.len() + 2);
    out.push('\'');
    for character in value.chars() {
        match character {
            '\\' => out.push_str("\\\\"),
            '\'' => out.push_str("\\'"),
            '\n' => out.push_str("\\n"),
            '\r' => out.push_str("\\r"),
            '\u{2028}' => out.push_str("\\u2028"),
            '\u{2029}' => out.push_str("\\u2029"),
            _ => out.push(character),
        }
    }
    out.push('\'');
    out
}

/// The payload of the `on_selection_change` callback: the plain text under the
/// selection plus the handle, mirroring the React `{ content, editor }` object.
#[derive(Clone, PartialEq)]
pub struct EditorSelectionType {
    pub content: String,
    pub handle: EditorHandleType,
}

/// The imperative handle for one editor instance — the Dioxus counterpart of
/// the React `EditorRefType` exposed through `useImperativeHandle`, and of the
/// `EditorControllerType` query helpers.
///
/// Obtain one through the `on_handle` prop of [`Editor`](super::Editor::Editor)
/// or [`EditorProvider`](super::EditorContext::EditorProvider), or with
/// [`use_editor_handle`](super::EditorContext::use_editor_handle) from inside
/// the editor tree. It is `Copy`, so store it in a `Signal` and call it from
/// anywhere.
///
/// # Rust differences from TypeScript
/// - There is no `ref` / `forwardRef` in Dioxus, hence the `on_handle` prop.
/// - `EditorControllerType.element` has no equivalent: this port drives the
///   editor through `dioxus::document::eval` and never holds a DOM node. Use
///   [`EditorHandleType::editor_id`] when you need to reach the element from
///   your own JS.
/// - Everything that returns a value — `get_content`, `get_selection`,
///   `is_active`, `get_attributes` — has to cross the `eval` boundary, so it is
///   `async` where the TypeScript API is synchronous. The mutating methods
///   (`set_content`, `insert_content`, …) stay synchronous, exactly like their
///   TypeScript counterparts.
#[derive(Clone, Copy, PartialEq)]
pub struct EditorHandleType {
    /// The `id` attribute of the `contentEditable` surface.
    pub editor_id: Signal<String>,
    /// Recompute the selection snapshot shared through the context.
    pub refresh: Callback<()>,
    /// Fire the user-facing `on_content_change` callback.
    pub emit_change: Callback<()>,
}

impl EditorHandleType {
    fn id(&self) -> String {
        self.editor_id.read().clone()
    }

    fn run(&self, js: &str) {
        editor_run_command(&self.id(), self.refresh, self.emit_change, js);
    }

    /// Serialize the document to HTML. Empty string when the document is empty.
    pub async fn get_content(&self) -> String {
        editor_get_content(&self.id()).await
    }

    /// Replace the whole document. An empty `html` resets it to a single empty
    /// paragraph; task-list markup is re-normalized as it is when loading
    /// persisted content.
    pub fn set_content(&self, html: &str) {
        let id = self.id();
        let literal = js_quote(html);
        let normalize = editor_init_js(&id);
        let _ = eval(&format!(
            r#"
            (function() {{
              const el = document.getElementById('{id}');
              if (!el) return;
              el.innerHTML = {literal} || '<p><br></p>';
            }})();
            {normalize}
            "#
        ));
        self.refresh.call(());
        self.emit_change.call(());
    }

    /// Insert HTML at the caret, replacing the selection when there is one.
    pub fn insert_content(&self, html: &str) {
        let literal = js_quote(html);
        self.run(&format!(
            "document.execCommand('insertHTML', false, {literal});"
        ));
    }

    /// Insert HTML at the start of the document when `position <= 0`, at the
    /// end otherwise — the same two-way split as the TypeScript
    /// `commands.insertContentAt`.
    pub fn insert_content_at(&self, position: i32, html: &str) {
        let id = self.id();
        let literal = js_quote(html);
        let collapse_to_start = position <= 0;
        self.run(&format!(
            r#"
            (function() {{
              const root = document.getElementById('{id}');
              if (!root) return;
              const range = document.createRange();
              range.selectNodeContents(root);
              range.collapse({collapse_to_start});
              const sel = window.getSelection();
              if (sel) {{
                sel.removeAllRanges();
                sel.addRange(range);
              }}
              document.execCommand('insertHTML', false, {literal});
            }})()
            "#
        ));
    }

    /// Delete the current selection. A collapsed caret is left alone.
    pub fn delete_selection(&self) {
        self.run(
            r#"
            (function() {
              const sel = window.getSelection();
              if (sel && !sel.isCollapsed) sel.deleteFromDocument();
            })()
            "#,
        );
    }

    /// The plain text currently selected, trimmed. Empty when the selection
    /// sits outside the editor.
    pub async fn get_selection(&self) -> String {
        editor_get_selection(&self.id()).await
    }

    /// Move focus to the editable surface.
    pub fn focus(&self) {
        let id = self.id();
        let _ = eval(&format!(
            "(function() {{ const el = document.getElementById('{id}'); if (el) el.focus(); }})()"
        ));
    }

    /// Move focus away from the editable surface.
    pub fn blur(&self) {
        let id = self.id();
        let _ = eval(&format!(
            "(function() {{ const el = document.getElementById('{id}'); if (el) el.blur(); }})()"
        ));
    }

    /// Whether the given mark or block is active at the current selection.
    ///
    /// `attributes` narrows the lookup: `level` for a heading, `align` for a
    /// paragraph. Pass `EditorActiveAttributesType::default()` for none.
    pub async fn is_active(
        &self,
        name: EditorActiveNameType,
        attributes: EditorActiveAttributesType,
    ) -> bool {
        let Some(state) = editor_compute_state(&self.id()).await else {
            return false;
        };
        match name {
            EditorActiveNameType::Mark(EditorMarkType::Bold) => state.bold,
            EditorActiveNameType::Mark(EditorMarkType::Italic) => state.italic,
            EditorActiveNameType::Mark(EditorMarkType::Underline) => state.underline,
            EditorActiveNameType::Mark(EditorMarkType::Strike) => state.strike,
            EditorActiveNameType::Mark(EditorMarkType::Subscript) => state.subscript,
            EditorActiveNameType::Mark(EditorMarkType::Superscript) => state.superscript,
            EditorActiveNameType::Mark(EditorMarkType::Link) => state.link,
            EditorActiveNameType::Mark(EditorMarkType::Highlight) => !state.highlight.is_empty(),
            EditorActiveNameType::Mark(EditorMarkType::TextStyle) => !state.color.is_empty(),
            EditorActiveNameType::Block(EditorBlockType::Blockquote) => state.blockquote,
            EditorActiveNameType::Block(EditorBlockType::Paragraph) => match attributes.align {
                Some(align) => state.paragraph && state.align == align,
                None => state.paragraph,
            },
            EditorActiveNameType::Block(EditorBlockType::Heading) => match attributes.level {
                Some(level) => state.heading_level == Some(level),
                None => state.heading_level.is_some(),
            },
            EditorActiveNameType::Block(EditorBlockType::BulletList) => state.bullet_list,
            EditorActiveNameType::Block(EditorBlockType::OrderedList) => state.ordered_list,
            EditorActiveNameType::Block(EditorBlockType::TaskList) => state.task_list,
        }
    }

    /// Read the attributes carried by a mark at the current selection: `href`
    /// for a link, `color` for `TextStyle` and `Highlight`. Every other name
    /// resolves to an empty map, as in TypeScript.
    pub async fn get_attributes(&self, name: EditorActiveNameType) -> HashMap<String, String> {
        let mut attributes = HashMap::new();
        let Some(state) = editor_compute_state(&self.id()).await else {
            return attributes;
        };
        match name {
            EditorActiveNameType::Mark(EditorMarkType::Link) => {
                if !state.link_href.is_empty() {
                    attributes.insert("href".to_string(), state.link_href);
                }
            }
            EditorActiveNameType::Mark(EditorMarkType::TextStyle) => {
                attributes.insert("color".to_string(), state.color);
            }
            EditorActiveNameType::Mark(EditorMarkType::Highlight) => {
                attributes.insert("color".to_string(), state.highlight);
            }
            _ => {}
        }
        attributes
    }
}
