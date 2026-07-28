//! Covers `src/routes/__root.rs` — the layout wrapping every page.

#[path = "../shared/harness.rs"]
mod harness;

use harness::{APP_SHELL, render_at};

#[test]
fn wraps_the_matched_page_in_the_app_shell() {
    let html = render_at("/");

    assert!(html.starts_with(APP_SHELL), "got: {html}");
    assert!(html.ends_with("</main>"), "got: {html}");
}

#[test]
fn renders_the_shell_once_per_page() {
    let html = render_at("/");

    assert_eq!(html.matches("<main").count(), 1, "got: {html}");
}

#[test]
fn wraps_the_catch_all_page_too() {
    // Every route the table declares sits under `#[layout(RootLayout)]`, the
    // catch-all included, so no path escapes the chrome.
    let html = render_at("/missing/page");

    assert!(html.starts_with(APP_SHELL), "got: {html}");
    assert!(html.ends_with("</main>"), "got: {html}");
}

#[test]
fn renders_the_matched_page_into_the_outlet() {
    // An empty shell means the `Outlet` failed to resolve the child route —
    // which is also how a component panicking outside a router shows up.
    let html = render_at("/");

    let page = html
        .strip_prefix(APP_SHELL)
        .and_then(|rest| rest.strip_suffix("</main>"))
        .unwrap_or_else(|| panic!("got: {html}"));

    assert!(!page.is_empty(), "got: {html}");
}
