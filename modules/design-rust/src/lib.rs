pub mod components;
pub mod hooks;
pub mod utils;

/// Icon components live in their own crate (`src/icons`) so the 19k generated
/// files compile once instead of on every rebuild of the design module.
pub use design_icons as icons;
