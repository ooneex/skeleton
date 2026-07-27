#![allow(non_snake_case)]

#[path = "Toaster.rs"]
pub mod toaster_mod;

pub use toaster_mod::{ToastHandleType, Toaster, toaster};
