use dioxus::prelude::*;

use crate::hooks::use_controlled_state;
use crate::icons::outline::ui_layout::sm::CheckIcon;
use crate::utils::cn;

/// Size variants for the [`Checkbox`] root element.
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum CheckboxSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl CheckboxSizeType {
    fn class(self) -> &'static str {
        match self {
            Self::Xs => "size-3.5",
            Self::Sm => "size-4",
            Self::Md => "size-[1.125rem]",
            Self::Lg => "size-5",
        }
    }

    fn indicator_class(self) -> &'static str {
        match self {
            Self::Xs => "[&>svg]:size-3",
            Self::Sm => "[&>svg]:size-3.5",
            Self::Md => "[&>svg]:size-4",
            Self::Lg => "[&>svg]:size-4.5",
        }
    }
}

/// Computes the Tailwind class string for the checkbox root button, merging the
/// size variant class and any additional `class` provided by the caller.
pub fn checkbox_variants(size: CheckboxSizeType, class: Option<&str>) -> String {
    cn([
        "ring-border data-checked:bg-primary data-checked:text-primary-foreground data-checked:ring-primary aria-invalid:aria-checked:ring-primary aria-invalid:ring-destructive hover:ring-ring-active focus-visible:ring-ring-active flex items-center justify-center rounded ring bg-transparent transition-[color,box-shadow] group-has-disabled/field:opacity-50 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        size.class(),
        class.unwrap_or_default(),
    ])
}

fn checkbox_indicator_variants(size: CheckboxSizeType) -> String {
    cn([
        "grid place-content-center text-current transition-none",
        size.indicator_class(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct CheckboxProps {
    /// Controlled checked state. When set the checkbox mirrors it and reports
    /// every change through `on_checked_change`.
    #[props(default)]
    pub checked: Option<bool>,
    /// Initial checked state for uncontrolled usage.
    #[props(default)]
    pub default_checked: Option<bool>,
    /// Called with the new checked state whenever the checkbox is toggled.
    pub on_checked_change: Option<EventHandler<bool>>,
    /// Visual size of the checkbox. Defaults to `Sm`.
    #[props(default)]
    pub size: Option<CheckboxSizeType>,
    #[props(default = false)]
    pub disabled: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Checkbox(props: CheckboxProps) -> Element {
    let size = props.size.unwrap_or_default();
    let is_disabled = props.disabled;

    let (checked, set_checked) = use_controlled_state(
        props.checked,
        props.default_checked.unwrap_or(false),
        props.on_checked_change,
    );

    let is_checked = *checked.read();

    rsx! {
        button {
            r#type: "button",
            role: "checkbox",
            "data-slot": "checkbox",
            "aria-checked": if is_checked { "true" } else { "false" },
            "data-checked": is_checked.then_some("true"),
            "data-unchecked": (!is_checked).then_some("true"),
            "data-disabled": is_disabled.then_some("true"),
            disabled: is_disabled,
            class: checkbox_variants(size, props.class.as_deref()),
            onclick: move |_| {
                if !is_disabled {
                    set_checked.call(!*checked.peek());
                }
            },
            onkeydown: move |event| {
                if let Key::Character(ref c) = event.key() && c == " " {
                    event.prevent_default();
                    if !is_disabled {
                        set_checked.call(!*checked.peek());
                    }
                }
            },
            ..props.attributes,
            span {
                "data-slot": "checkbox-indicator",
                class: checkbox_indicator_variants(size),
                if is_checked {
                    CheckIcon {}
                }
            }
        }
    }
}
