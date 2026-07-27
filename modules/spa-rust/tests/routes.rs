use dioxus::history::{History, MemoryHistory};
use dioxus::prelude::*;
use dioxus::router::components::HistoryProvider;
use spa_rust::bootstrap::App;
use spa_rust::routes::Route;
use std::{rc::Rc, str::FromStr};

/// Renders the real app at `path` by handing the router a memory history, which
/// is how a browserless test drives client-side routing.
#[component]
fn Harness(path: Route) -> Element {
    rsx! {
        HistoryProvider {
            history: move |_| Rc::new(MemoryHistory::with_initial_path(path.clone())) as Rc<dyn History>,
            App {}
        }
    }
}

fn render_at(path: &str) -> String {
    let route = Route::from_str(path).expect("every path resolves to a route");
    let mut dom = VirtualDom::new_with_props(Harness, HarnessProps { path: route });
    dom.rebuild_in_place();

    dioxus_ssr::render(&dom)
}

#[test]
fn resolves_the_index_path() {
    let route = Route::from_str("/").expect("the index path resolves");

    assert_eq!(route, Route::Index {});
}

#[test]
fn collects_unmatched_segments_into_the_catch_all() {
    let route = Route::from_str("/nope/deeper").expect("an unclaimed path resolves");

    assert_eq!(
        route,
        Route::NotFound {
            segments: vec!["nope".to_string(), "deeper".to_string()],
        }
    );
}

#[test]
fn renders_the_index_page_inside_the_app_shell() {
    let html = render_at("/");

    assert!(html.contains("flex-1 min-h-0 overflow-y-auto p-0"));
    assert!(html.contains("Hello &#34;/&#34;!"));
}

#[test]
fn renders_the_not_found_page_inside_the_app_shell() {
    let html = render_at("/missing/page");

    assert!(html.contains("flex-1 min-h-0 overflow-y-auto p-0"));
    assert!(html.contains("Page not found"));
    assert!(html.contains("/missing/page"));
}

#[test]
fn links_the_not_found_page_back_to_the_index() {
    let html = render_at("/missing");

    assert!(html.contains(r#"<a href="/""#), "got: {html}");
    assert!(html.contains("Back to home"));
}

#[test]
fn formats_every_route_back_into_its_path() {
    assert_eq!(Route::Index {}.to_string(), "/");
    assert_eq!(
        Route::NotFound {
            segments: vec!["a".to_string(), "b".to_string()],
        }
        .to_string(),
        "/a/b"
    );
}
