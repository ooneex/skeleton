use dioxus::prelude::*;

use super::dropdownMenuContext::DropdownMenuRadioGroupContext;

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuRadioGroupProps {
    #[props(default)]
    pub value: Option<String>,
    pub on_value_change: Option<EventHandler<String>>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Groups `DropdownMenuRadioItem` elements and tracks the selected value.
///
/// Re-implements the radio group context, overriding the default no-op context
/// provided by `DropdownMenu`.
#[component]
pub fn DropdownMenuRadioGroup(props: DropdownMenuRadioGroupProps) -> Element {
    let mut value_sig = use_signal(|| props.value.clone());

    let controlled_value = props.value.clone();
    use_effect(use_reactive!(|(controlled_value,)| {
        value_sig.set(controlled_value);
    }));

    let on_value_change = props.on_value_change;
    let set_value = use_callback(move |v: String| {
        value_sig.set(Some(v.clone()));
        if let Some(ref h) = on_value_change {
            h.call(v);
        }
    });

    use_context_provider(|| DropdownMenuRadioGroupContext {
        value: value_sig,
        set_value,
    });

    rsx! {
        div {
            role: "group",
            "data-slot": "dropdown-menu-radio-group",
            ..props.attributes,
            {props.children}
        }
    }
}
