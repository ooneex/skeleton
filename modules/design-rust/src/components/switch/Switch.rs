use dioxus::prelude::*;

use crate::hooks::use_controlled_state;
use crate::utils::cn;

/// Size variants for the [`Switch`] root element.
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum SwitchSizeType {
    Xs,
    Sm,
    #[default]
    Md,
    Lg,
}

impl SwitchSizeType {
    fn class(self) -> &'static str {
        match self {
            Self::Xs => "h-3 w-5",
            Self::Sm => "h-3.5 w-6",
            Self::Md => "h-[18.4px] w-8",
            Self::Lg => "h-5 w-9",
        }
    }

    fn thumb_class(self) -> &'static str {
        match self {
            Self::Xs => "size-2.5 data-checked:translate-x-[calc(100%-2px)]",
            Self::Sm => "size-3 data-checked:translate-x-[calc(100%-4px)]",
            Self::Md => "size-4 data-checked:translate-x-[calc(100%-4px)]",
            Self::Lg => "size-4.5 data-checked:translate-x-[calc(100%-4px)]",
        }
    }

    fn as_str(self) -> &'static str {
        match self {
            Self::Xs => "xs",
            Self::Sm => "sm",
            Self::Md => "md",
            Self::Lg => "lg",
        }
    }
}

/// Computes the Tailwind class string for the switch root element, based on size.
pub fn switch_variants(size: SwitchSizeType) -> String {
    cn([
        "data-checked:bg-primary data-unchecked:bg-border focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 shrink-0 rounded-full shadow-xs focus-visible:ring-[3px] aria-invalid:ring-[3px] peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50 cursor-pointer pl-0.5 py-2",
        size.class(),
    ])
}

fn switch_thumb_variants(size: SwitchSizeType) -> String {
    cn([
        "bg-background rounded-full pointer-events-none block ring-0 transition-transform data-unchecked:translate-x-0",
        size.thumb_class(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct SwitchProps {
    /// Controlled checked state. When set the switch mirrors it and reports
    /// every change through `on_checked_change`.
    #[props(default)]
    pub checked: Option<bool>,
    /// Initial checked state for uncontrolled usage.
    #[props(default)]
    pub default_checked: Option<bool>,
    /// Called with the new checked state whenever the switch is toggled.
    pub on_checked_change: Option<EventHandler<bool>>,
    /// Visual size of the switch. Defaults to `Md`.
    #[props(default)]
    pub size: Option<SwitchSizeType>,
    #[props(default = false)]
    pub disabled: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Switch(props: SwitchProps) -> Element {
    let size = props.size.unwrap_or_default();
    let is_disabled = props.disabled;

    let (checked, set_checked) = use_controlled_state(
        props.checked,
        props.default_checked.unwrap_or(false),
        props.on_checked_change,
    );

    let is_checked = *checked.read();
    let variant_class = switch_variants(size);

    rsx! {
        button {
            r#type: "button",
            role: "switch",
            "data-slot": "switch",
            "data-size": size.as_str(),
            "aria-checked": if is_checked { "true" } else { "false" },
            "data-checked": is_checked.then_some("true"),
            "data-unchecked": (!is_checked).then_some("true"),
            "data-disabled": is_disabled.then_some("true"),
            disabled: is_disabled,
            class: cn([
                variant_class.as_str(),
                props.class.as_deref().unwrap_or_default(),
            ]),
            onclick: move |_| {
                if !is_disabled {
                    set_checked.call(!*checked.peek());
                }
            },
            onkeydown: move |event| {
                if let Key::Character(ref c) = event.key() {
                    if c == " " {
                        event.prevent_default();
                        if !is_disabled {
                            set_checked.call(!*checked.peek());
                        }
                    }
                }
            },
            ..props.attributes,
            span {
                "data-slot": "switch-thumb",
                "data-checked": is_checked.then_some("true"),
                "data-unchecked": (!is_checked).then_some("true"),
                class: switch_thumb_variants(size),
            }
        }
    }
}
