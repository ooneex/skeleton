//! Vertical slices, one module per domain feature.
//!
//! A feature owns its full stack — `components`, `hooks`, `layouts`, `services`,
//! `store`, `styles`, `translations`, `types`, `utils` — and must not reach into
//! another feature's internals. Promote anything two features need into
//! [`crate::shared`].
//!
//! Only hooks talk to the backend; services hold pure domain rules.
//!
//! Declare each slice here as it is added, e.g. `pub mod user;`.
