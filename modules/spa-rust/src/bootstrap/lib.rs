//! Crate root. It lives in `bootstrap/` alongside the rest of the entry-point
//! wiring, so the modules it declares are reached through `#[path]`.

#[path = "mod.rs"]
pub mod bootstrap;

#[path = "../features/mod.rs"]
pub mod features;

#[path = "../routes/mod.rs"]
pub mod routes;

#[path = "../shared/mod.rs"]
pub mod shared;
