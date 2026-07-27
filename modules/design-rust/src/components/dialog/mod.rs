#![allow(non_snake_case)]

mod AlertDialog;
mod AlertDialogAction;
mod AlertDialogCancel;
mod AlertDialogContent;
mod AlertDialogDescription;
mod AlertDialogFooter;
mod AlertDialogHeader;
mod AlertDialogMedia;
mod AlertDialogOverlay;
mod AlertDialogPortal;
mod AlertDialogTitle;
mod Dialog;
mod DialogContent;
mod DialogContext;
mod DialogDescription;
mod DialogFooter;
mod DialogHeader;
mod DialogOverlay;
mod DialogPortal;
mod DialogTitle;
mod useDialogBehavior;
mod useDialogPresence;

pub use AlertDialog::{AlertDialog, AlertDialogModeType, AlertDialogPropsType, alert, confirm};
pub use Dialog::Dialog;
