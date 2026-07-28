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

/// Clamps a percentage drag-delta for the two panels adjacent to `handle_idx`,
/// respecting each panel's `min` / `max` bounds while keeping their combined
/// size constant (i.e. the sum of all panel sizes stays at 100 %).
///
/// `react-resizable-panels` uses the same two-pass clamp: first constrain the
/// left panel, then derive the right panel from the remaining pool, then clamp
/// the right panel and re-derive the left.
pub(crate) fn clamp_drag(
    start: &[f64],
    handle_idx: usize,
    delta_pct: f64,
    min_sizes: &[f64],
    max_sizes: &[f64],
) -> Vec<f64> {
    let right = handle_idx + 1;
    if right >= start.len() {
        return start.to_vec();
    }
    let left = handle_idx;
    // Total space shared by the two adjacent panels — stays constant.
    let pool = start[left] + start[right];

    let min_l = min_sizes.get(left).copied().unwrap_or(0.0);
    let max_l = max_sizes.get(left).copied().unwrap_or(100.0).min(pool);
    let min_r = min_sizes.get(right).copied().unwrap_or(0.0);
    let max_r = max_sizes.get(right).copied().unwrap_or(100.0).min(pool);

    // Pass 1: desired left size → clamp left → derive right.
    let desired_l = (start[left] + delta_pct).clamp(min_l, max_l);
    let candidate_r = pool - desired_l;
    let new_r = candidate_r.clamp(min_r, max_r);

    // Pass 2: re-derive left from the (possibly clamped) right → clamp left again.
    let new_l = (pool - new_r).clamp(min_l, max_l);

    let mut result = start.to_vec();
    result[left] = new_l;
    result[right] = pool - new_l; // right absorbs any residual rounding
    result
}

/// Shared context for a `ResizablePanelGroup` and its children.
#[derive(Clone, Copy)]
pub(crate) struct ResizablePanelGroupContext {
    pub(crate) direction: Signal<DirectionType>,
    pub(crate) group_id: Signal<String>,
    /// Panel sizes in percent, one entry per registered panel (registration order).
    pub(crate) sizes: Signal<Vec<f64>>,
    /// Per-panel minimum size in percent (0 = unconstrained).
    pub(crate) min_sizes: Signal<Vec<f64>>,
    /// Per-panel maximum size in percent (100 = unconstrained).
    pub(crate) max_sizes: Signal<Vec<f64>>,
    /// Called by a handle when the user presses the pointer on it.
    pub(crate) start_drag: Callback<(usize, f64, f64)>, // (handle_idx, coord, container_px)
    /// Called by a focused handle on keyboard events; carries `(handle_idx, step_pct)`.
    /// `step_pct` is signed: positive = expand left panel, negative = shrink it.
    pub(crate) keyboard_resize: Callback<(usize, f64)>,
}

#[derive(Props, Clone, PartialEq)]
pub struct ResizablePanelGroupProps {
    /// Panel layout direction. Defaults to `horizontal`.
    #[props(default)]
    pub direction: DirectionType,
    /// Called with the new panel-size array (percentages) after each drag or
    /// keyboard resize.
    pub on_layout: Option<EventHandler<Vec<f64>>>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Drag-resizable panel group built on pointer events and keyboard navigation.
///
/// `react-resizable-panels` has no Rust equivalent. This component re-implements
/// the public API and DOM structure, driving layout via `flex-basis` percentages.
/// Pointer capture uses a full-screen overlay (same technique as the library).
/// Keyboard resizing (Arrow / Home / End) and per-panel min/max constraints are
/// fully supported.
#[component]
pub fn ResizablePanelGroup(props: ResizablePanelGroupProps) -> Element {
    let group_id = use_id("resizable-panel-group");

    let mut sizes = use_signal(Vec::<f64>::new);
    let min_sizes = use_signal(Vec::<f64>::new);
    let max_sizes = use_signal(Vec::<f64>::new);
    let mut dragging = use_signal(|| None::<usize>);
    let mut drag_start_coord = use_signal(|| 0.0f64);
    let mut drag_start_sizes = use_signal(Vec::<f64>::new);
    let mut container_px = use_signal(|| 1.0f64);
    let mut direction = use_signal(|| props.direction);

    let dir = props.direction;
    use_effect(use_reactive!(|(dir,)| {
        direction.set(dir);
    }));

    let on_layout_drag = props.on_layout.clone();
    let on_layout_kbd = props.on_layout;

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
        let mins = min_sizes.peek().clone();
        let maxs = max_sizes.peek().clone();
        sizes.set(clamp_drag(&start, handle_idx, delta_pct, &mins, &maxs));
    });

    let end_drag = use_callback(move |final_sizes: Vec<f64>| {
        dragging.set(None);
        if let Some(ref h) = on_layout_drag {
            h.call(final_sizes);
        }
    });

    let keyboard_resize = use_callback(move |(handle_idx, step_pct): (usize, f64)| {
        let current = sizes.peek().clone();
        let mins = min_sizes.peek().clone();
        let maxs = max_sizes.peek().clone();
        let new_sizes = clamp_drag(&current, handle_idx, step_pct, &mins, &maxs);
        sizes.set(new_sizes.clone());
        if let Some(ref h) = on_layout_kbd {
            h.call(new_sizes);
        }
    });

    use_context_provider(|| ResizablePanelGroupContext {
        direction,
        group_id: use_signal(|| group_id.clone()),
        sizes,
        min_sizes,
        max_sizes,
        dragging,
        drag_start_coord,
        drag_start_sizes,
        container_px,
        start_drag,
        move_drag,
        end_drag,
        keyboard_resize,
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
            // Full-screen pointer-capture overlay rendered while a drag is active.
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
