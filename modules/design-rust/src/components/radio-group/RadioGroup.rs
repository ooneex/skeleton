use dioxus::prelude::*;

use crate::utils::cn;

/// Shared state for a radio group and its items.
#[derive(Clone, Copy)]
pub(crate) struct RadioGroupContext {
    pub(crate) value: Signal<Option<String>>,
    pub(crate) set_value: Callback<String>,
    pub(crate) disabled: Signal<bool>,
    pub(crate) required: Signal<bool>,
}

impl RadioGroupContext {
    pub(crate) fn is_selected(&self, item_value: &str) -> bool {
        self.value.read().as_deref() == Some(item_value)
    }

    pub(crate) fn is_disabled(&self) -> bool {
        *self.disabled.read()
    }

    pub(crate) fn select(&self, value: String) {
        self.set_value.call(value);
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct RadioGroupProps {
    /// Controlled selected value.
    #[props(default)]
    pub value: Option<String>,
    /// Initial selected value when uncontrolled.
    #[props(default)]
    pub default_value: Option<String>,
    /// Called whenever the selection changes.
    pub on_value_change: Option<EventHandler<String>>,
    /// Disables every item in the group.
    #[props(default = false)]
    pub disabled: bool,
    /// Marks the group as required for form validation.
    #[props(default = false)]
    pub required: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Accessible radio group. Compose with `RadioGroupItem` for each option.
///
/// ```rust,ignore
/// rsx! {
///     RadioGroup { default_value: "b",
///         RadioGroupItem { value: "a" }
///         RadioGroupItem { value: "b" }
///     }
/// }
/// ```
#[component]
pub fn RadioGroup(props: RadioGroupProps) -> Element {
    let mut selected = use_signal(|| props.value.clone().or(props.default_value.clone()));

    let mut disabled = use_signal(|| props.disabled);
    let mut required = use_signal(|| props.required);

    // Mirror controlled value changes.
    let controlled = props.value.clone();
    use_effect(use_reactive!(|(controlled,)| {
        if let Some(v) = controlled {
            selected.set(Some(v));
        }
    }));

    let (is_disabled, is_required) = (props.disabled, props.required);
    use_effect(use_reactive!(|(is_disabled, is_required)| {
        disabled.set(is_disabled);
        required.set(is_required);
    }));

    let on_value_change = props.on_value_change;
    let set_value = use_callback(move |v: String| {
        selected.set(Some(v.clone()));
        if let Some(handler) = on_value_change {
            handler.call(v);
        }
    });

    use_context_provider(|| RadioGroupContext {
        value: selected,
        set_value,
        disabled,
        required,
    });

    rsx! {
        div {
            "data-slot": "radio-group",
            role: "radiogroup",
            "aria-required": props.required.then_some("true"),
            "aria-disabled": props.disabled.then_some("true"),
            class: cn(["grid gap-3 w-full", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
