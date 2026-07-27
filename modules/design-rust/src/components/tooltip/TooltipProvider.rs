use dioxus::prelude::*;

use super::tooltipContext::TooltipProviderContext;

#[derive(Props, Clone, PartialEq)]
pub struct TooltipProviderProps {
    /// Milliseconds before tooltips inside the provider open on hover.
    #[props(default = 0.0)]
    pub delay: f64,
    pub children: Element,
}

/// Wraps multiple `Tooltip` components to share a common hover delay.
#[component]
pub fn TooltipProvider(props: TooltipProviderProps) -> Element {
    use_context_provider(|| TooltipProviderContext { delay: props.delay });

    rsx! { {props.children} }
}
