//! Covers `src/bootstrap/app.rs` — the root component.
//!
//! `launch()` is not covered: it mounts into a real DOM and there is none on the
//! host. What is testable is everything `App` wires up before that point.

#[path = "../shared/harness.rs"]
mod harness;

use harness::{APP_SHELL, render, render_at};
use spa_rust::bootstrap::App;

#[test]
fn mounts_the_router_at_the_default_history() {
    // Without a history provider the router falls back to its default history,
    // so this renders the app exactly as the binary mounts it.
    let html = render(App);

    assert!(html.contains(APP_SHELL), "got: {html}");
    assert!(html.contains(r#"Hello &#34;/&#34;!"#), "got: {html}");
}

#[test]
fn renders_the_same_markup_as_the_router_seeded_at_the_root_path() {
    assert_eq!(render(App), render_at("/"));
}

#[test]
fn renders_without_the_compiled_stylesheet() {
    // `APP_CSS` is an `option_asset!`, which is what lets `cargo test` run on a
    // clean checkout where `dx` has not produced `assets/app.css` yet. If that
    // ever becomes a hard `asset!`, this stops compiling or renders nothing.
    let html = render(App);

    assert!(!html.is_empty());
}

#[test]
fn adds_no_body_markup_of_its_own() {
    // The root component contributes providers and the stylesheet link, both of
    // which belong outside the body — the shell is the outermost element.
    let html = render(App);

    assert!(html.starts_with(APP_SHELL), "got: {html}");
    assert!(html.ends_with("</main>"), "got: {html}");
}
