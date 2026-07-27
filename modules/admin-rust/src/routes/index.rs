use dioxus::prelude::*;

/// Index (`/`) route — the dashboard landing page.
#[component]
pub fn Index() -> Element {
    rsx! {
        div { "Hello \"/\"!" }
    }
}
