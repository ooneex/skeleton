#![allow(non_snake_case)]

pub mod Editor;
pub mod EditorContent;
pub mod EditorContext;
pub mod EditorHandle;
pub mod FloatingToolbar;
pub mod LinkDialog;
pub mod SlashMenu;
pub mod Toolbar;
pub mod YouTubeDialog;
pub mod commands;
pub mod types;

pub use Editor::{Editor, EditorProps};
pub use EditorContent::{EditorContent, EditorContentProps};
// `EditorContext` (the struct) is not re-exported here: it would collide with the
// `EditorContext` module declared above, and every consumer reaches the value
// through `use_editor_context()` instead.
pub use EditorContext::{
    EditorProvider, EditorProviderProps, editor_compute_state, editor_get_content,
    editor_get_selection, editor_insert_youtube, editor_redo, editor_run_command, editor_set_color,
    editor_set_highlight, editor_set_link, editor_set_paragraph, editor_set_text_align,
    editor_toggle_blockquote, editor_toggle_bold, editor_toggle_bullet_list, editor_toggle_heading,
    editor_toggle_italic, editor_toggle_ordered_list, editor_toggle_strike,
    editor_toggle_subscript, editor_toggle_superscript, editor_toggle_task_list,
    editor_toggle_underline, editor_undo, editor_unset_color, editor_unset_highlight,
    editor_unset_link, use_editor_context, use_editor_handle,
};
pub use EditorHandle::{EditorHandleType, EditorSelectionType};
pub use FloatingToolbar::{FloatingToolbar, FloatingToolbarProps};
pub use LinkDialog::{LinkDialog, LinkDialogProps};
pub use SlashMenu::{SlashMenu, SlashMenuProps};
pub use Toolbar::{
    EditorAlign, EditorAlignProps, EditorBlockquote, EditorBold, EditorBulletList, EditorColor,
    EditorHeading, EditorHeadingProps, EditorHighlight, EditorItalic, EditorLink,
    EditorOrderedList, EditorParagraph, EditorRedo, EditorStrike, EditorSubscript,
    EditorSuperscript, EditorTaskList, EditorToolbar, EditorToolbarProps, EditorUnderline,
    EditorUndo, EditorYouTube, ToolbarButtonProps,
};
pub use YouTubeDialog::{YouTubeDialog, YouTubeDialogProps};
pub use commands::{TASK_CHECKBOX_CLASS, TASK_ITEM_CLASS, TASK_LIST_CLASS, YOUTUBE_CLASS};
pub use types::{
    EditorActiveAttributesType, EditorActiveNameType, EditorAlignType, EditorBlockType,
    EditorMarkType, EditorStateType, empty_editor_state,
};
