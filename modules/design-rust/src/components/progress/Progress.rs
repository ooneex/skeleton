use dioxus::prelude::*;

use crate::utils::cn;

/// State shared between `Progress` and its sub-components.
#[derive(Clone, Copy)]
pub struct ProgressContext {
    /// Current progress value (0–100). `None` means indeterminate.
    pub value: Signal<Option<f64>>,
    /// Minimum value (default 0).
    pub min: Signal<f64>,
    /// Maximum value (default 100).
    pub max: Signal<f64>,
}

impl ProgressContext {
    /// Returns the normalised 0–1 fraction, or `None` for indeterminate.
    pub fn fraction(&self) -> Option<f64> {
        let value = (*self.value.read())?;
        let min = *self.min.read();
        let max = *self.max.read();
        if max == min {
            return Some(0.0);
        }
        Some((value - min) / (max - min))
    }

    /// Returns `"indeterminate"`, `"complete"`, or `"loading"` as the ARIA state.
    pub fn state(&self) -> &'static str {
        match *self.value.read() {
            None => "indeterminate",
            Some(v) if v >= *self.max.read() => "complete",
            _ => "loading",
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct ProgressProps {
    /// Current value (0–100). `None` = indeterminate.
    #[props(default)]
    pub value: Option<f64>,
    #[props(default = 0.0)]
    pub min: f64,
    #[props(default = 100.0)]
    pub max: f64,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Progress bar component.
///
/// Compose with `Progress.Track`, `Progress.Indicator`, `Progress.Label`,
/// and `Progress.Value`.
#[component]
pub fn Progress(props: ProgressProps) -> Element {
    let mut value = use_signal(|| props.value);
    let mut min = use_signal(|| props.min);
    let mut max = use_signal(|| props.max);

    let (prop_value, prop_min, prop_max) = (props.value, props.min, props.max);
    use_effect(use_reactive!(|(prop_value, prop_min, prop_max)| {
        value.set(prop_value);
        min.set(prop_min);
        max.set(prop_max);
    }));

    use_context_provider(|| ProgressContext { value, min, max });

    let ctx = use_context::<ProgressContext>();
    let state = ctx.state();
    let aria_valuenow = props.value.map(|v| v.to_string());

    rsx! {
        div {
            "data-slot": "progress",
            role: "progressbar",
            "aria-valuenow": aria_valuenow,
            "aria-valuemin": props.min.to_string(),
            "aria-valuemax": props.max.to_string(),
            "data-state": state,
            class: cn(["flex flex-wrap gap-3", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
