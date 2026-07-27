use std::sync::atomic::{AtomicUsize, Ordering};

use dioxus::prelude::*;

use crate::hooks::use_id;
use crate::utils::cn;

static NEXT_PANEL_IDX: AtomicUsize = AtomicUsize::new(0);

pub(crate) fn next_panel_idx() -> usize {
    NEXT_PANEL_IDX.fetch_add(1, Ordering::Relaxed)
}

/// Direction of the panel group layout.
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum DirectionType {
    #[default]
    Horizontal,
    Vertical,
}

impl DirectionType {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::Horizontal => "horizontal",
            Self::Vertical => "vertical",
        }
    }
}

/// Shared context for a `ResizablePanelGroup` and its children.
#[derive(Clone, Copy)]
pub(crate) struct ResizablePanelGroupContext {
    pub(crate) direction: Signal<DirectionType>,
    pub(crate) group_id: Signal<String>,
    /// Panel sizes in percent, one entry per registered panel (in registration order).
    pub(crate) sizes: Signal<Vec<f64>>,
    /// Index of the handle currently being dragged, or `None`.
    pub(crate) dragging: Signal<Option<usize>>,
    /// Pointer coordinate (client X or Y) at drag start.
    pub(crate) drag_start_coord: Signal<f64>,
    /// Snapshot of `sizes` taken when the drag started.
    pub(crate) drag_start_sizes: Signal<Vec<f64>>,
    /// Pixel width/height of the container (updated when a drag begins).
    pub(crate) container_px: Signal<f64>,
    /// Called by a handle when the user presses it.
    pub(crate) start_drag: Callback<(usize, f64, f64)>, // (handle_idx, coord, container_px)
    /// Called by the drag overlay on every pointer move.
    pub(crate) move_drag: Callback<f64>, // current coord
    /// Called by the drag overlay on pointer up.
    pub(crate) end_drag: Callback<Vec<f64>>, // final sizes → on_layout
}

#[derive(Props, Clone, PartialEq)]
pub struct ResizablePanelGroupProps {
    /// Panel layout direction. Defaults to `horizontal`.
    #[props(default)]
    pub direction: DirectionType,
    /// Called with the new panel-size array (percentages) after each drag.
    pub on_layout: Option<EventHandler<Vec<f64>>>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Drag-resizable panel group built on pointer events.
///
/// `react-resizable-panels` has no Rust equivalent. This component re-implements
/// the public API and DOM structure, driving layout via `flex-basis` percentages
/// updated on pointer move. Pointer capture is achieved by rendering a full-screen
/// overlay when a drag is active, mirroring the library's own approach.
#[component]
pub fn ResizablePanelGroup(props: ResizablePanelGroupProps) -> Element {
    let group_id = use_id("resizable-panel-group");

    let mut sizes = use_signal(Vec::<f64>::new);
    let mut dragging = use_signal(|| None::<usize>);
    let mut drag_start_coord = use_signal(|| 0.0f64);
    let mut drag_start_sizes = use_signal(Vec::<f64>::new);
    let mut container_px = use_signal(|| 1.0f64);
    let mut direction = use_signal(|| props.direction);

    let dir = props.direction;
    use_effect(use_reactive!(|(dir,)| {
        direction.set(dir);
    }));

    let on_layout = props.on_layout;

    let start_drag = use_callback(move |(handle_idx, coord, c_px): (usize, f64, f64)| {
        drag_start_coord.set(coord);
        drag_start_sizes.set(sizes.peek().clone());
        container_px.set(if c_px > 0.0 { c_px } else { 1.0 });
        dragging.set(Some(handle_idx));
    });

    let move_drag = use_callback(move |current: f64| {
        let Some(handle_idx) = *dragging.peek() else {
            return;
        };
        let delta_px = current - *drag_start_coord.peek();
        let delta_pct = delta_px / *container_px.peek() * 100.0;
        let start = drag_start_sizes.peek().clone();
        if handle_idx + 1 >= start.len() {
            return;
        }
        let mut next = start.clone();
        next[handle_idx] = (start[handle_idx] + delta_pct).max(0.0);
        next[handle_idx + 1] = (start[handle_idx + 1] - delta_pct).max(0.0);
        let total: f64 = next.iter().sum();
        if total > 0.0 {
            for s in &mut next {
                *s = *s / total * 100.0;
            }
        }
        sizes.set(next);
    });

    let end_drag = use_callback(move |final_sizes: Vec<f64>| {
        dragging.set(None);
        if let Some(handler) = on_layout {
            handler.call(final_sizes);
        }
    });

    use_context_provider(|| ResizablePanelGroupContext {
        direction,
        group_id: use_signal(|| group_id.clone()),
        sizes,
        dragging,
        drag_start_coord,
        drag_start_sizes,
        container_px,
        start_drag,
        move_drag,
        end_drag,
    });

    let is_dragging = dragging.read().is_some();
    let is_horizontal = matches!(*direction.read(), DirectionType::Horizontal);

    rsx! {
        div {
            id: group_id,
            "data-slot": "resizable-panel-group",
            "data-panel-group-direction": direction.read().as_str(),
            class: cn([
                "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
            // Full-screen pointer-capture overlay rendered while dragging.
            if is_dragging {
                div {
                    class: "fixed inset-0 z-[9999] touch-none select-none",
                    style: if is_horizontal { "cursor: col-resize" } else { "cursor: row-resize" },
                    onpointermove: move |event| {
                        let coord = if is_horizontal {
                            event.client_coordinates().x as f64
                        } else {
                            event.client_coordinates().y as f64
                        };
                        move_drag.call(coord);
                    },
                    onpointerup: move |_| {
                        end_drag.call(sizes.peek().clone());
                    },
                }
            }
        }
    }
}
