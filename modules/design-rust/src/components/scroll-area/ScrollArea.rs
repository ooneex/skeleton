use dioxus::document::eval;
use dioxus::prelude::*;

use super::ScrollBar::{ScrollBar, ScrollOrientationType};
use crate::hooks::use_id;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ScrollAreaProps {
    /// When `true` the built-in vertical scrollbar is not rendered.
    #[props(default = false)]
    pub hide_scrollbar: bool,
    /// Extra classes applied to the scrollable viewport div (e.g. `max-h-72`).
    #[props(default)]
    pub viewport_class: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Scrollable container that tracks overflow state and exposes top/bottom
/// fade-shadow classes (`data-overflow-y-start:before:opacity-100` /
/// `data-overflow-y-end:after:opacity-100`) via data attributes on the root.
///
/// The interactive scrollbar thumb position is kept in sync with the viewport
/// scroll state through a lightweight JS observer injected on first mount.
#[component]
pub fn ScrollArea(props: ScrollAreaProps) -> Element {
    let root_id = use_id("scroll-area");
    let viewport_id = use_id("scroll-area-viewport");
    let scrollbar_id = use_id("scroll-area-scrollbar");

    // Clone IDs for the async future before they are borrowed for the RSX.
    let root_id_js = root_id.clone();
    let viewport_id_js = viewport_id.clone();
    let scrollbar_id_js = scrollbar_id.clone();

    use_future(move || {
        let root_id = root_id_js.clone();
        let viewport_id = viewport_id_js.clone();
        let scrollbar_id = scrollbar_id_js.clone();
        async move {
            eval(&format!(
                r#"
                const root = document.getElementById("{root_id}");
                const viewport = document.getElementById("{viewport_id}");
                const scrollbar = document.getElementById("{scrollbar_id}");
                if (!root || !viewport) return;

                const update = () => {{
                    const atTop = viewport.scrollTop <= 1;
                    const atBottom =
                        viewport.scrollTop + viewport.clientHeight >= viewport.scrollHeight - 1;
                    root.toggleAttribute("data-overflow-y-start", !atTop);
                    root.toggleAttribute("data-overflow-y-end", !atBottom);

                    if (scrollbar) {{
                        const thumb = scrollbar.querySelector("[data-slot=scroll-area-thumb]");
                        if (thumb) {{
                            const ratio = viewport.clientHeight / viewport.scrollHeight;
                            const thumbH = Math.max(20, scrollbar.clientHeight * ratio);
                            const maxScroll = viewport.scrollHeight - viewport.clientHeight;
                            const offset = maxScroll > 0
                                ? (viewport.scrollTop / maxScroll)
                                    * (scrollbar.clientHeight - thumbH)
                                : 0;
                            thumb.style.height = thumbH + "px";
                            thumb.style.transform = "translateY(" + offset + "px)";
                        }}
                    }}
                }};

                update();
                viewport.addEventListener("scroll", update, {{ passive: true }});
                const ro = new ResizeObserver(update);
                ro.observe(viewport);
                await dioxus.recv();
                viewport.removeEventListener("scroll", update);
                ro.disconnect();
                "#
            ));
        }
    });

    rsx! {
        div {
            id: root_id,
            "data-slot": "scroll-area",
            class: cn([
                "relative overflow-hidden",
                "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-linear-to-b before:from-black/3 before:to-transparent before:opacity-0 before:transition-opacity data-overflow-y-start:before:opacity-100",
                "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-2 after:bg-linear-to-t after:from-black/3 after:to-transparent after:opacity-0 after:transition-opacity data-overflow-y-end:after:opacity-100",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            div {
                id: viewport_id,
                "data-slot": "scroll-area-viewport",
                class: cn([
                    "focus-visible:ring-ring/50 h-full w-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1 overflow-auto scrollbar-none",
                    props.viewport_class.as_deref().unwrap_or_default(),
                ]),
                {props.children}
            }
            if !props.hide_scrollbar {
                ScrollBar {
                    id: scrollbar_id,
                    orientation: ScrollOrientationType::Vertical,
                    class: "absolute right-0 top-0 h-full",
                }
            }
            div { class: "absolute right-0 bottom-0 z-20 h-2.5 w-2.5" }
        }
    }
}
