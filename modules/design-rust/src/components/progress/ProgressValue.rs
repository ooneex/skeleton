use dioxus::prelude::*;

use super::Progress::ProgressContext;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ProgressValueProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    /// Optional children. When omitted the computed percentage (e.g. "42%") is
    /// rendered automatically from the progress context, matching Base UI behaviour.
    #[props(default)]
    pub children: Option<Element>,
}

#[component]
pub fn ProgressValue(props: ProgressValueProps) -> Element {
    let ctx = use_context::<ProgressContext>();

    // When no children are provided, fall back to "42%" derived from context —
    // same as Base UI's Progress.Value default render.
    let fallback = if props.children.is_none() {
        ctx.fraction()
            .map(|f| format!("{}%", (f * 100.0).round() as i64))
    } else {
        None
    };

    rsx! {
        span {
            "data-slot": "progress-value",
            class: cn([
                "text-muted-foreground ml-auto text-sm tabular-nums",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            if let Some(children) = props.children {
                {children}
            } else if let Some(text) = fallback {
                {text}
            }
        }
    }
}
