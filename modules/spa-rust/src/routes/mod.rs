#![allow(non_snake_case)]

//! File-based routes. Keep them thin — delegate UI to `features`, data to
//! `shared`.

use dioxus::prelude::*;

mod __root;
mod index;
mod notFound;

pub use __root::RootLayout;
pub use index::Index;
pub use notFound::NotFound;

/// The typed route table — the counterpart of TanStack Router's generated
/// `routeTree.gen.ts`. Dioxus derives the tree from this enum at compile time,
/// so unlike the TypeScript spa there is nothing to generate and nothing to keep
/// in sync: adding a route here is the whole change.
///
/// The catch-all comes last and is wrapped by the layout too, so a path no other
/// route claims still renders inside the app shell instead of the router's own
/// parse error.
#[rustfmt::skip]
#[derive(Clone, Debug, PartialEq, Routable)]
pub enum Route {
    #[layout(RootLayout)]
        #[route("/")]
        Index {},
        #[route("/:..segments")]
        NotFound { segments: Vec<String> },
}
