#![allow(non_snake_case)]

mod Blockquote;
mod Heading;
mod HighlightText;
mod InlineCode;
mod Link;
mod List;
mod Table;
mod Text;

pub use Blockquote::{Blockquote, BlockquoteProps};
pub use Heading::{H1, H1Props, H2, H2Props, H3, H3Props, H4, H4Props, H5, H5Props, H6, H6Props};
pub use HighlightText::{HighlightText, HighlightTextProps};
pub use InlineCode::{InlineCode, InlineCodeProps};
pub use Link::{Link, LinkProps, LinkSizeType, link_variants};
pub use List::{List, ListProps};
pub use Table::{
    Table, TableBody, TableBodyProps, TableCell, TableCellProps, TableHead, TableHeadProps,
    TableHeader, TableHeaderProps, TableProps, TableRow, TableRowProps,
};
pub use Text::{
    Large, LargeProps, Lead, LeadProps, Muted, MutedProps, P, PProps, Small, SmallProps,
};
