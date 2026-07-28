use dioxus::prelude::*;

use super::report_web_vitals;
use crate::routes::Route;

/// Id of the mount node declared in `index.html`.
const ROOT_ELEMENT_ID: &str = "app";

/// Compiled Tailwind sheet, produced by `dx` from the design system's
/// stylesheet before the crate is built (`Dioxus.toml` → `tailwind_output`,
/// fed by `tailwind_input` in `main.rs`). It is resolved
/// optionally so `cargo check`/`cargo test` still work on a clean checkout,
/// where the generated file does not exist yet.
const APP_CSS: Option<Asset> = option_asset!("/assets/app.css");

/// Root component: wires global providers and hands every path over to the typed
/// router — the counterpart of `RouterProvider` in the TypeScript spa's
/// `app.tsx`. Theme and query-client providers belong here.
#[component]
pub fn App() -> Element {
    // If you want to start measuring performance in your app, pass a callback
    // to `report_web_vitals` (for example: `Some(Callback::new(|metric| ...))`)
    // or send it to an analytics endpoint.
    report_web_vitals(None);

    rsx! {
        {APP_CSS.map(|css| rsx! {
            document::Stylesheet { href: css }
        })}
        Router::<Route> {}
    }
}

/// Mounts the app into `#app` — the counterpart of `ReactDOM.createRoot(...)`.
pub fn launch() {
    dioxus::LaunchBuilder::web()
        .with_cfg(dioxus::web::Config::new().rootname(ROOT_ELEMENT_ID))
        .launch(App);
}
