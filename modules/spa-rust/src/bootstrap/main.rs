//! Binary entry point, and the home of the `dx` build configuration.
//!
//! `dx` reads the block below as if it were a `Dioxus.toml` sitting next to
//! `Cargo.toml`: it extracts config from the doc comment of whichever source
//! file the binary target points at, and deep-merges it over the defaults. Every
//! path in it stays relative to the crate root, not to this file.
//!
//! ```dioxus.toml
//! [application]
//! name = "spa-rust"
//! # Mirrors the `build.outDir` / `publicDir` pair of the TypeScript spa's vite config.
//! out_dir = "dist"
//! public_dir = "public"
//! # `dx` runs the Tailwind CLI over this entry before every build, which is what
//! # `@tailwindcss/vite` does for the TypeScript spa. The design system's sheet is
//! # the entry directly — its own `@source "../../.."` already scans every module,
//! # this one included, so the spa needs no Tailwind entry of its own.
//! tailwind_input = "../design-rust/src/styles/app.css"
//! tailwind_output = "assets/app.css"
//!
//! [web.app]
//! title = "Ooneex"
//!
//! [web.watcher]
//! watch_path = ["src", "public"]
//! index_on_404 = true
//! ```

fn main() {
    spa_rust::bootstrap::launch();
}
