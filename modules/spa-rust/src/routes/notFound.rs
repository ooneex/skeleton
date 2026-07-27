use dioxus::prelude::*;

use crate::routes::Route;

/// Catch-all route for a path no other route claims, standing in for the
/// `notFoundComponent` the TypeScript spa registers on its root route.
///
/// `segments` carries the unmatched path so the page can report what was asked
/// for.
#[component]
pub fn NotFound(segments: Vec<String>) -> Element {
    rsx! {
        div { class: "flex flex-col items-start gap-2 p-6",
            h1 { class: "text-lg", "Page not found" }
            p { class: "text-muted-foreground text-sm", "/{segments.join(\"/\")}" }
            Link {
                to: Route::Index {},
                class: "text-primary underline-offset-4 hover:underline",
                "Back to home"
            }
        }
    }
}
