//! Covers `src/routes/notFound.rs` — the catch-all page.

#[path = "../shared/harness.rs"]
mod harness;

use harness::{APP_SHELL, render_at};

#[test]
fn announces_that_the_page_was_not_found() {
    let html = render_at("/missing/page");

    assert!(
        html.contains(r#"<h1 class="text-lg">Page not found</h1>"#),
        "got: {html}"
    );
}

#[test]
fn reports_the_path_that_was_asked_for() {
    let html = render_at("/missing/page");

    assert!(html.contains("/missing/page"), "got: {html}");
}

#[test]
fn reports_a_single_unmatched_segment_without_a_trailing_separator() {
    let html = render_at("/missing");

    assert!(html.contains(">/missing</p>"), "got: {html}");
}

#[test]
fn links_back_to_the_index() {
    let html = render_at("/missing");

    assert!(html.contains(r#"<a href="/""#), "got: {html}");
    assert!(html.contains("Back to home"), "got: {html}");
}

#[test]
fn renders_inside_the_app_shell() {
    // The catch-all sits under the layout, so an unclaimed path still lands in
    // the app chrome instead of the router's own parse error.
    let html = render_at("/missing/page");

    assert!(html.contains(APP_SHELL), "got: {html}");
}

#[test]
fn escapes_markup_smuggled_in_through_the_path() {
    let html = render_at("/%3Cscript%3Ealert(1)%3C/script%3E");

    assert!(!html.contains("<script>"), "got: {html}");
    assert!(html.contains("&#60;script&#62;alert(1)"), "got: {html}");
}
