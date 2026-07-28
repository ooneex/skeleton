//! Rendering helpers shared by every `_spec.rs` in this folder.
//!
//! Pulled in with `#[path = "../shared/harness.rs"] mod harness;` rather than
//! being a test target of its own, so `Cargo.toml` never lists it.

// Each spec is its own crate and uses only the helpers it needs, so anything the
// others use looks dead from here.
#![allow(dead_code)]

use dioxus::history::{History, MemoryHistory};
use dioxus::prelude::*;
use dioxus::router::components::HistoryProvider;
use spa_rust::bootstrap::App;
use spa_rust::routes::Route;
use std::{rc::Rc, str::FromStr};

/// Opening tag of the app shell that [`spa_rust::routes::RootLayout`] wraps every
/// page in. Asserted against by name so the class list lives in one place.
pub const APP_SHELL: &str = r#"<main class="flex-1 min-h-0 overflow-y-auto p-0">"#;

/// Renders the real [`App`] at `path` by handing the router a memory history,
/// which is how a browserless test drives client-side routing.
#[component]
fn Harness(path: Route) -> Element {
    rsx! {
        HistoryProvider {
            history: move |_| Rc::new(MemoryHistory::with_initial_path(path.clone())) as Rc<dyn History>,
            App {}
        }
    }
}

/// Renders the whole app as it would appear after navigating to `path`.
pub fn render_at(path: &str) -> String {
    let route = Route::from_str(path).expect("the path resolves to a route");
    let mut dom = VirtualDom::new_with_props(Harness, HarnessProps { path: route });
    dom.rebuild_in_place();

    dioxus_ssr::render(&dom)
}

/// Renders a single component that needs no router context. Components reaching
/// for `Outlet` or `Link` must go through [`render_at`] instead — outside a
/// router they panic and are rendered as an empty hole.
pub fn render(component: fn() -> Element) -> String {
    let mut dom = VirtualDom::new(component);
    dom.rebuild_in_place();

    dioxus_ssr::render(&dom)
}
