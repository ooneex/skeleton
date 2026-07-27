//! Vertical slices, one module per admin domain (users, roles, settings…).
//!
//! A feature owns its full stack — `assets`, `components`, `hooks`, `layouts`,
//! `services`, `store`, `styles`, `translations`, `types`, `utils` — and must
//! not reach into another feature's internals. Promote anything shared by two
//! or more features to [`crate::shared`].
