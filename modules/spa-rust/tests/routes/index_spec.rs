//! Covers `src/routes/index.rs` — the landing page at `/`.

#[path = "../shared/harness.rs"]
mod harness;

use harness::{APP_SHELL, render, render_at};
use spa_rust::routes::Index;

#[test]
fn renders_the_landing_copy_on_its_own() {
    // The page reaches for no router context, so it renders standalone.
    assert_eq!(render(Index), r#"<div>Hello &#34;/&#34;!</div>"#);
}

#[test]
fn renders_inside_the_app_shell_when_reached_through_the_router() {
    let html = render_at("/");

    assert!(html.contains(APP_SHELL), "got: {html}");
    assert!(html.contains(r#"Hello &#34;/&#34;!"#), "got: {html}");
}

#[test]
fn is_reached_through_a_query_string_too() {
    assert_eq!(render_at("/?q=1"), render_at("/"));
}
