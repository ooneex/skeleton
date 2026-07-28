/// A block-level node type the editor can produce.
#[derive(Clone, Copy, PartialEq, Eq, Debug)]
pub enum EditorBlockType {
    Paragraph,
    Heading,
    Blockquote,
    BulletList,
    OrderedList,
    TaskList,
}

/// An inline mark the editor can apply to a selection.
#[derive(Clone, Copy, PartialEq, Eq, Debug)]
pub enum EditorMarkType {
    Bold,
    Italic,
    Underline,
    Strike,
    Subscript,
    Superscript,
    Link,
    Highlight,
    TextStyle,
}

/// Anything the editor handle's `is_active` / `get_attributes` helpers
/// understand — the union of [`EditorBlockType`] and [`EditorMarkType`].
#[derive(Clone, Copy, PartialEq, Eq, Debug)]
pub enum EditorActiveNameType {
    Block(EditorBlockType),
    Mark(EditorMarkType),
}

impl From<EditorBlockType> for EditorActiveNameType {
    fn from(value: EditorBlockType) -> Self {
        Self::Block(value)
    }
}

impl From<EditorMarkType> for EditorActiveNameType {
    fn from(value: EditorMarkType) -> Self {
        Self::Mark(value)
    }
}

/// Optional qualifiers narrowing an [`EditorActiveNameType`] lookup: the
/// heading level for `Heading`, the alignment for `Paragraph`.
#[derive(Clone, Copy, PartialEq, Eq, Debug, Default)]
pub struct EditorActiveAttributesType {
    pub level: Option<u8>,
    pub align: Option<EditorAlignType>,
}

/// Horizontal text alignment.
#[derive(Clone, Copy, PartialEq, Eq, Debug, Default)]
pub enum EditorAlignType {
    #[default]
    Left,
    Center,
    Right,
    Justify,
}

impl EditorAlignType {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::Left => "left",
            Self::Center => "center",
            Self::Right => "right",
            Self::Justify => "justify",
        }
    }
}

impl From<&str> for EditorAlignType {
    /// Infallible: any unknown value falls back to `Left`, matching the
    /// React editor which treats a missing alignment as left-aligned.
    fn from(value: &str) -> Self {
        match value {
            "center" => Self::Center,
            "right" => Self::Right,
            "justify" => Self::Justify,
            _ => Self::Left,
        }
    }
}

/// A reactive snapshot of the editor's current selection state.
#[derive(Clone, PartialEq, Debug)]
pub struct EditorStateType {
    pub bold: bool,
    pub italic: bool,
    pub underline: bool,
    pub strike: bool,
    pub subscript: bool,
    pub superscript: bool,
    pub link: bool,
    /// The `href` of the anchor wrapping the selection, or `""` when none.
    pub link_href: String,
    pub blockquote: bool,
    pub paragraph: bool,
    pub heading_level: Option<u8>,
    pub bullet_list: bool,
    pub ordered_list: bool,
    pub task_list: bool,
    pub align: EditorAlignType,
    /// The inline text color under the caret, or `""` when none is set.
    pub color: String,
    /// The highlight color under the caret, or `""` when none is set.
    pub highlight: String,
    pub can_undo: bool,
    pub can_redo: bool,
    pub is_empty: bool,
}

/// The empty/default selection state used before the editor mounts.
pub fn empty_editor_state() -> EditorStateType {
    EditorStateType {
        bold: false,
        italic: false,
        underline: false,
        strike: false,
        subscript: false,
        superscript: false,
        link: false,
        link_href: String::new(),
        blockquote: false,
        paragraph: false,
        heading_level: None,
        bullet_list: false,
        ordered_list: false,
        task_list: false,
        align: EditorAlignType::Left,
        color: String::new(),
        highlight: String::new(),
        can_undo: false,
        can_redo: false,
        is_empty: true,
    }
}
