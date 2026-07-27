#![allow(non_snake_case)]

//! File-based routes. Keep them thin — delegate UI to `features`, data to
//! `shared`, and guard admin routes behind auth/role checks.

use dioxus::prelude::*;

mod __root;
mod index;

pub use __root::RootLayout;
pub use index::Index;

/// The typed route table — the counterpart of TanStack Router's generated
/// `routeTree.gen.ts`. Dioxus derives the tree from this enum at compile time,
/// so unlike the TypeScript admin there is nothing to generate and nothing to
/// keep in sync: adding a route here is the whole change.
#[rustfmt::skip]
#[derive(Clone, Debug, PartialEq, Routable)]
pub enum Route {
    #[layout(RootLayout)]
        #[route("/")]
        Index {},
}
