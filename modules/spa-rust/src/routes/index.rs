use dioxus::prelude::*;

/// Index (`/`) route — the landing page.
#[component]
pub fn Index() -> Element {
    rsx! {
        div { "Hello 2 \"/\"!" }
    }
}
