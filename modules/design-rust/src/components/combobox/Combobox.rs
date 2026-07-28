use dioxus::prelude::*;

use super::comboboxContext::ComboboxContext;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxProps {
    #[props(default)]
    pub class: Option<String>,
    /// Controlled selected value.
    #[props(default)]
    pub value: Option<String>,
    /// Initial selected value (uncontrolled).
    #[props(default)]
    pub default_value: Option<String>,
    /// Callback when selection changes.
    #[props(default)]
    pub on_value_change: Option<EventHandler<String>>,
    /// Controlled input text value.
    #[props(default)]
    pub input_value: Option<String>,
    /// Callback when input text changes.
    #[props(default)]
    pub on_input_value_change: Option<EventHandler<String>>,
    /// Controlled open state.
    #[props(default)]
    pub open: Option<bool>,
    #[props(default)]
    pub default_open: bool,
    #[props(default)]
    pub on_open_change: Option<EventHandler<bool>>,
    #[props(default)]
    pub disabled: bool,
    pub children: Element,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Combobox root. Provides [`ComboboxContext`] to all sub-components.
#[component]
pub fn Combobox(props: ComboboxProps) -> Element {
    let initial_value = props
        .value
        .clone()
        .or_else(|| props.default_value.clone())
        .map(|v| vec![v])
        .unwrap_or_default();

    let initial_open = props.open.unwrap_or(props.default_open);
    let initial_input = props.input_value.clone().unwrap_or_default();

    let value = use_signal(|| initial_value);
    let open = use_signal(|| initial_open);
    let input_value = use_signal(|| initial_input);
    let highlighted_value = use_signal(String::new);
    let items: Signal<Vec<String>> = use_signal(Vec::new);

    // Sync controlled props.
    let open_prop = props.open;
    let value_prop = props.value.clone();
    let input_prop = props.input_value.clone();
    use_effect(move || {
        if let Some(o) = open_prop {
            open.clone().set(o);
        }
        if let Some(ref v) = value_prop {
            let current = value.peek();
            if !current.contains(v) {
                drop(current);
                value.clone().set(vec![v.clone()]);
            }
        }
        if let Some(ref iv) = input_prop
            && *input_value.peek() != *iv
        {
            input_value.clone().set(iv.clone());
        }
    });

    let ctx = ComboboxContext {
        open,
        value,
        input_value,
        highlighted_value,
        items,
        on_value_change: props.on_value_change,
        on_input_value_change: props.on_input_value_change,
        disabled: props.disabled,
    };
    use_context_provider(|| ctx);

    rsx! {
        div {
            "data-slot": "combobox",
            class: cn(["relative", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
