use dioxus::prelude::*;

use crate::routes::Route;

/// Root route: the app-wide admin shell (nav/sidebar) and the shared chrome
/// wrapping every page. Error, not-found and pending boundaries belong here
/// once the admin grows real screens.
#[component]
pub fn RootLayout() -> Element {
    rsx! {
        main { class: "flex-1 min-h-0 overflow-y-auto p-0",
            Outlet::<Route> {}
        }
    }
}
