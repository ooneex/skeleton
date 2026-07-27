//! Code reused by two or more features, and the only module features may import
//! from in common.
//!
//! It follows the same layout as a feature — `components`, `hooks`, `layouts`,
//! `services`, `store`, `styles`, `translations`, `types`, `utils` — scoped to
//! the whole app instead of one slice.
//!
//! Declare each shared module here as it is added, e.g. `pub mod components;`.
