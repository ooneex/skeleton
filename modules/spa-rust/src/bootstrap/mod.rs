#![allow(non_snake_case)]

//! Entry point and build wiring, rarely edited by hand once scaffolded.
//!
//! The HTML shell lives at the crate root (`index.html`) rather than next to
//! `app.rs`, and cannot be moved here: `dx` looks it up as
//! `crate_dir().join("index.html")` — hardcoded, with no `Dioxus.toml` key to
//! point elsewhere. A missing file is not an error either; `dx` falls back to
//! its own bundled shell, which mounts at `#main` instead of the
//! `ROOT_ELEMENT_ID` this app launches into, so the build still succeeds
//! and the page renders blank.

mod app;
mod reportWebVitals;

pub use app::{App, launch};
pub use reportWebVitals::{WebVitalType, report_web_vitals};
