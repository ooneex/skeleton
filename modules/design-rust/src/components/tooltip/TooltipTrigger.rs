use dioxus::prelude::*;

use super::tooltipContext::TooltipContext;

#[derive(Props, Clone, PartialEq)]
pub struct TooltipTriggerProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Wraps the element that triggers the tooltip on hover or focus.
/// Renders a `<span>` by default; apply `display: contents` or wrap a native
/// element to avoid layout side effects.
///
/// # Limitations
/// The TypeScript component can render into a caller-provided element through
/// its `render` prop; here the wrapper is always a `<span>`. Dioxus offers no
/// `cloneElement` equivalent, so the pointer/focus handlers and `data-slot`
/// cannot be merged into an already-built `Element` — wrap the target instead.
#[component]
pub fn TooltipTrigger(props: TooltipTriggerProps) -> Element {
    let ctx = use_context::<TooltipContext>();
    let trigger_id = ctx.trigger_id.read().clone();
    let is_open = *ctx.open.read();

    rsx! {
        span {
            id: trigger_id,
            "data-slot": "tooltip-trigger",
            "data-popup-open": is_open.then_some(""),
            class: props.class.clone(),
            onpointerenter: move |_| {
                ctx.schedule_open.call(());
            },
            onpointerleave: move |_| {
                ctx.cancel_open.call(());
                ctx.set_open.call(false);
            },
            onpointerdown: move |_| {
                ctx.cancel_open.call(());
                ctx.set_open.call(false);
            },
            onfocus: move |_| ctx.set_open.call(true),
            onblur: move |_| {
                ctx.cancel_open.call(());
                ctx.set_open.call(false);
            },
            ..props.attributes,
            {props.children}
        }
    }
}
