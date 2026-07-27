use std::str::FromStr;

use admin_rust::routes::Route;
use dioxus::prelude::*;

fn app() -> Element {
    rsx! {
        Router::<Route> {}
    }
}

fn render(app: fn() -> Element) -> String {
    let mut dom = VirtualDom::new(app);
    dom.rebuild_in_place();

    dioxus_ssr::render(&dom)
}

#[test]
fn maps_the_index_variant_to_the_root_path() {
    assert_eq!(Route::Index {}.to_string(), "/");
    assert_eq!(Route::from_str("/").expect("index route"), Route::Index {});
}

#[test]
fn rejects_paths_outside_the_route_table() {
    assert!(Route::from_str("/does-not-exist").is_err());
}

#[test]
fn wraps_the_index_route_in_the_root_shell() {
    let html = render(app);

    assert!(html.contains("<main class=\"flex-1 min-h-0 overflow-y-auto p-0\""));
    assert!(html.contains("Hello \"/\"!"));
}
