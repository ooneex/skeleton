use dioxus::prelude::*;

use super::ResizablePanelGroup::{ResizablePanelGroupContext, next_panel_idx};
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ResizablePanelProps {
    /// Initial size as a percentage of the group. Defaults to equal distribution.
    #[props(default)]
    pub default_size: Option<f64>,
    /// Minimum size constraint in percent (default 0 — no minimum).
    #[props(default)]
    pub min_size: Option<f64>,
    /// Maximum size constraint in percent (default 100 — no maximum).
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
/// On first mount the panel appends itself to the group's size, min, and max
/// vectors at the index given by a process-wide atomic counter.  Subsequent
/// renders read the computed size from the context and apply it as `flex-basis`.
#[component]
pub fn ResizablePanel(props: ResizablePanelProps) -> Element {
    let ctx = use_context::<ResizablePanelGroupContext>();

    // Assign a stable slot index once at mount, registering constraints.
    let panel_index = use_hook(|| {
        let idx = next_panel_idx();
        let default_size = props.default_size.unwrap_or(0.0);
        let min_size = props.min_size.unwrap_or(0.0);
        let max_size = props.max_size.unwrap_or(100.0);

        // Rebind signals as mutable bindings so .write() is callable.
        let mut s = ctx.sizes;
        let mut mn = ctx.min_sizes;
        let mut mx = ctx.max_sizes;

        {
            let mut guard = s.write();
            if idx >= guard.len() {
                guard.resize(idx + 1, default_size);
            } else {
                guard[idx] = default_size;
            }
        }
        {
            let mut guard = mn.write();
            if idx >= guard.len() {
                guard.resize(idx + 1, min_size);
            } else {
                guard[idx] = min_size;
            }
        }
        {
            let mut guard = mx.write();
            if idx >= guard.len() {
                guard.resize(idx + 1, max_size);
            } else {
                guard[idx] = max_size;
            }
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
