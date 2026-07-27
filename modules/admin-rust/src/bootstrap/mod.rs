#![allow(non_snake_case)]

//! Entry point and build wiring, rarely edited by hand once scaffolded.
//!
//! The HTML shell lives at the crate root (`index.html`) rather than next to
//! `app.rs`: `dx` only ever reads it from there.

mod app;
mod reportWebVitals;

pub use app::{App, launch};
pub use reportWebVitals::{WebVitalType, report_web_vitals};
