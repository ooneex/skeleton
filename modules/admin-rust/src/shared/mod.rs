//! Cross-feature code reused by two or more features — the only place a
//! feature may import from in common.
//!
//! Same sub-layout as a feature: `assets`, `components`, `hooks`, `layouts`,
//! `services`, `store`, `styles`, `translations`, `types`, `utils`. Design-system
//! primitives are not duplicated here; they come from the `design_rust` crate.
