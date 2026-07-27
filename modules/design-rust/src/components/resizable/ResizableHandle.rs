use dioxus::document::eval;
use dioxus::prelude::*;

use super::ResizablePanelGroup::{DirectionType, ResizablePanelGroupContext, next_panel_idx};
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ResizableHandleProps {
    /// Renders a visible grab bar inside the separator line.
    #[props(default = false)]
    pub with_handle: bool,
    /// Prevents dragging.
    #[props(default = false)]
    pub disabled: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Drag handle between two `ResizablePanel` siblings.
///
/// The handle's slot index (the panel boundary it controls) is assigned with
/// the same process-wide counter used by `ResizablePanel`; because panels and
/// handles render in source order, a handle always sits between
/// `panels[handle_index]` and `panels[handle_index + 1]`.
#[component]
pub fn ResizableHandle(props: ResizableHandleProps) -> Element {
    let ctx = use_context::<ResizablePanelGroupContext>();

    // The handle occupies the slot between the last registered panel and the
    // next one — which is the current counter value minus 1.
    let handle_index = use_hook(next_panel_idx).saturating_sub(1);

    let is_horizontal = matches!(*ctx.direction.read(), DirectionType::Horizontal);
    let disabled = props.disabled;
    let group_id = ctx.group_id.read().clone();

    rsx! {
        div {
            "data-slot": "resizable-handle",
            "data-panel-group-direction": ctx.direction.read().as_str(),
            "aria-disabled": disabled.then_some("true"),
            tabindex: if disabled { -1i64 } else { 0 },
            class: cn([
                "border-l relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
                if disabled { "pointer-events-none opacity-50" } else { "cursor-col-resize data-[panel-group-direction=vertical]:cursor-row-resize" },
                props.class.as_deref().unwrap_or_default(),
            ]),
            onpointerdown: move |event| {
                if disabled { return; }
                let coord = if is_horizontal {
                    event.client_coordinates().x as f64
                } else {
                    event.client_coordinates().y as f64
                };
                // Use JS to measure the group container so we can convert pixel
                // deltas to percentages during the drag.
                let group_id = group_id.clone();
                let prop = if is_horizontal { "offsetWidth" } else { "offsetHeight" };
                spawn(async move {
                    let mut e = eval(&format!(
                        r#"
                        const el = document.getElementById("{group_id}");
                        dioxus.send(el ? el.{prop} : 800);
                        "#
                    ));
                    let c_px: f64 = e.recv::<f64>().await.unwrap_or(800.0);
                    ctx.start_drag.call((handle_index, coord, c_px));
                });
            },
            ..props.attributes,
            if props.with_handle {
                div { class: "bg-border h-10 w-1.5 rounded-[4px] z-10 flex shrink-0" }
            }
        }
    }
}
