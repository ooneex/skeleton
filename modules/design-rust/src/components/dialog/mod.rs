#![allow(non_snake_case)]

// Use #[path] aliases to prevent E0255: module name vs component name collision.
pub mod AlertDialogAction;
pub mod AlertDialogCancel;
pub mod AlertDialogContent;
pub mod AlertDialogDescription;
pub mod AlertDialogFooter;
pub mod AlertDialogHeader;
pub mod AlertDialogMedia;
pub mod AlertDialogOverlay;
pub mod AlertDialogPortal;
pub mod AlertDialogTitle;
pub mod DialogContent;
pub mod DialogContext;
pub mod DialogDescription;
pub mod DialogFooter;
pub mod DialogHeader;
pub mod DialogOverlay;
pub mod DialogPortal;
pub mod DialogTitle;
#[path = "AlertDialog.rs"]
pub mod alert_dialog;
#[path = "Dialog.rs"]
pub mod dialog_impl;
pub mod useDialogBehavior;
pub mod useDialogPresence;

pub use DialogContent::DialogContent;
pub use DialogDescription::DialogDescription;
pub use DialogFooter::DialogFooter;
pub use DialogHeader::DialogHeader;
pub use DialogTitle::DialogTitle;
pub use alert_dialog::{AlertDialog, AlertDialogModeType, AlertDialogPropsType, alert, confirm};
pub use dialog_impl::Dialog;
