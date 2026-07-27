use dioxus::prelude::*;

use super::tooltipContext::{TooltipContext, TooltipProviderContext};
use crate::hooks::use_id;

#[derive(Props, Clone, PartialEq)]
pub struct TooltipProps {
    /// Controlled open state.
    #[props(default)]
    pub open: Option<bool>,
    /// Initial open state when uncontrolled.
    #[props(default = false)]
    pub default_open: bool,
    /// Called when the open state changes.
    pub on_open_change: Option<EventHandler<bool>>,
    /// Milliseconds before the tooltip opens on hover. Falls back to the provider delay.
    #[props(default)]
    pub delay: Option<f64>,
    pub children: Element,
}

/// Tooltip compound component.
///
/// The root already provides a `TooltipProvider` context. Use the attached
/// sub-components (`Tooltip.Trigger`, `Tooltip.Content`) to compose a tooltip.
#[component]
pub fn Tooltip(props: TooltipProps) -> Element {
    let (open, set_open) =
        crate::hooks::use_controlled_state(props.open, props.default_open, props.on_open_change);

    let trigger_id = use_signal(|| use_id("tooltip-trigger"));
    let positioner_id = use_signal(|| use_id("tooltip-positioner"));

    // Provide the inner provider context (shadows any outer TooltipProvider).
    use_context_provider(|| TooltipProviderContext { delay: 0.0 });

    // Generation counter: incrementing it cancels any in-flight timer.
    let mut timer_gen = use_signal(|| 0_u64);

    let open_delay = props.delay.unwrap_or(0.0);

    let schedule_open = use_callback(move |()| {
        let timer_gen_val = *timer_gen.peek() + 1;
        timer_gen.set(timer_gen_val);
        if open_delay <= 0.0 {
            set_open.call(true);
            return;
        }
        let delay_ms = open_delay;
        let mut ev = dioxus::document::eval(&format!(
            "await new Promise(r => setTimeout(r, {delay_ms})); dioxus.send(true);"
        ));
        spawn(async move {
            if ev.recv::<bool>().await.is_ok() && *timer_gen.peek() == timer_gen_val {
                set_open.call(true);
            }
        });
    });

    let cancel_open = use_callback(move |()| {
        // Incrementing the generation invalidates any pending timer.
        let next = *timer_gen.peek() + 1;
        timer_gen.set(next);
    });

    use_context_provider(|| TooltipContext {
        open,
        set_open,
        trigger_id,
        positioner_id,
        schedule_open,
        cancel_open,
    });

    rsx! { {props.children} }
}
