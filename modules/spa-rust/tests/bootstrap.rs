use dioxus::prelude::*;
use spa_rust::bootstrap::App;

/// Without a history provider the router falls back to its default history, so
/// this renders the app exactly as the binary mounts it.
fn render_app() -> String {
    let mut dom = VirtualDom::new(App);
    dom.rebuild_in_place();

    dioxus_ssr::render(&dom)
}

#[test]
fn mounts_the_router_at_the_root_path() {
    let html = render_app();

    assert!(html.contains("flex-1 min-h-0 overflow-y-auto p-0"));
    assert!(html.contains("Hello &#34;/&#34;!"));
}

#[test]
fn collects_no_web_vitals_until_a_callback_is_given() {
    // `report_web_vitals(None)` must not panic or reach the network during the
    // first render, which is the default the scaffold ships.
    let html = render_app();

    assert!(!html.contains("web-vitals"));
}
