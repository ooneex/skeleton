use dioxus::prelude::*;

use super::Select::SelectContext;
use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum SelectValueSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl SelectValueSizeType {
    pub fn class(&self) -> &'static str {
        match self {
            Self::Xs => "text-xs",
            Self::Sm => "text-sm",
            Self::Md => "text-base",
            Self::Lg => "text-lg",
        }
    }
}

pub fn select_value_variants(size: SelectValueSizeType, class: Option<&str>) -> String {
    cn([
        "flex flex-1 text-left text-foreground",
        size.class(),
        class.unwrap_or_default(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct SelectValueProps {
    /// Text shown when no value is selected.
    #[props(default)]
    pub placeholder: Option<String>,
    #[props(default)]
    pub size: SelectValueSizeType,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Displays the label of the currently selected item inside the trigger. Falls
/// back to the placeholder when nothing is selected.
///
/// Item labels are resolved from the registry populated by `SelectItem` on
/// first render of the popup. Until then the raw value string is shown.
#[component]
pub fn SelectValue(props: SelectValueProps) -> Element {
    let ctx = use_context::<SelectContext>();
    let has_value = ctx.value.read().is_some();

    let display = ctx.selected_label().or_else(|| ctx.value.read().clone());

    rsx! {
        span {
            "data-slot": "select-value",
            "data-placeholder": (!has_value).then_some("true"),
            class: select_value_variants(props.size, props.class.as_deref()),
            ..props.attributes,
            if let Some(text) = display {
                {text}
            } else if let Some(placeholder) = props.placeholder {
                span { class: "text-muted-foreground", {placeholder} }
            }
        }
    }
}
