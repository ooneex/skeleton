use dioxus::prelude::*;

use super::ResizablePanelGroup::{ResizablePanelGroupContext, next_panel_idx};
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ResizablePanelProps {
    /// Initial size as a percentage of the group. Defaults to equal distribution.
    #[props(default)]
    pub default_size: Option<f64>,
    /// Minimum size constraint in percent.
    #[props(default)]
    pub min_size: Option<f64>,
    /// Maximum size constraint in percent.
    #[props(default)]
    pub max_size: Option<f64>,
    /// Explicit ordering index; panels render in ascending order when set.
    #[props(default)]
    pub order: Option<usize>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// A single resizable panel inside a `ResizablePanelGroup`.
///
/// On first mount the panel appends itself to the group's size vector at the
/// index given by a process-wide atomic counter; subsequent renders read their
/// computed size from the context and apply it as `flex-basis`.
#[component]
pub fn ResizablePanel(props: ResizablePanelProps) -> Element {
    let mut ctx = use_context::<ResizablePanelGroupContext>();

    // Assign a stable slot index once at mount.
    let panel_index = use_hook(|| {
        let idx = next_panel_idx();
        let default_size = props.default_size.unwrap_or(0.0);
        let mut sizes = ctx.sizes.write();
        // Grow the vector if needed.
        if idx >= sizes.len() {
            sizes.resize(idx + 1, default_size);
        } else {
            sizes[idx] = default_size;
        }
        idx
    });

    let size = ctx.sizes.read().get(panel_index).copied().unwrap_or(0.0);

    // Translate size percentage to flex-basis so panels fill their share.
    let flex_style = if size > 0.0 {
        format!("flex: 0 0 {size}%; min-width: 0; min-height: 0")
    } else {
        "flex: 1 1 0%; min-width: 0; min-height: 0".to_string()
    };

    rsx! {
        div {
            "data-slot": "resizable-panel",
            "data-panel-size": format!("{size:.1}"),
            class: cn([props.class.as_deref().unwrap_or_default()]),
            style: flex_style,
            ..props.attributes,
            {props.children}
        }
    }
}
