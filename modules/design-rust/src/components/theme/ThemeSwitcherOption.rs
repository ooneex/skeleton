use dioxus::prelude::*;

use crate::components::select::{SelectItem, SelectItemSizeType};
use crate::icons::outline::design_development::sm::MonitorIcon;
use crate::icons::outline::energy_environment::sm::SunIcon;
use crate::icons::outline::weather::sm::MoonIcon;
use crate::utils::cn;

/// A theme that can be selected in the theme switcher.
pub type ThemeType = &'static str;

/// Human-readable label for each theme code. Unknown codes are displayed
/// verbatim, so the returned label borrows from `theme`.
pub fn theme_label(theme: &str) -> &str {
    match theme {
        "system" => "System",
        "light" => "Light",
        "dark" => "Dark",
        _ => theme,
    }
}

/// Parenthesised scheme suffix, shown next to non-system theme labels.
pub fn theme_scheme_suffix(theme: &str) -> Option<&'static str> {
    match theme {
        "light" => Some("(Light)"),
        "dark" => Some("(Dark)"),
        _ => None,
    }
}

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum ThemeSwitcherOptionSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl ThemeSwitcherOptionSizeType {
    pub fn icon_class(&self) -> &'static str {
        match self {
            Self::Xs => "size-3.5 shrink-0",
            Self::Sm => "size-4 shrink-0",
            Self::Md => "size-4.5 shrink-0",
            Self::Lg => "size-5 shrink-0",
        }
    }
}

impl From<ThemeSwitcherOptionSizeType> for SelectItemSizeType {
    fn from(s: ThemeSwitcherOptionSizeType) -> Self {
        match s {
            ThemeSwitcherOptionSizeType::Xs => SelectItemSizeType::Xs,
            ThemeSwitcherOptionSizeType::Sm => SelectItemSizeType::Sm,
            ThemeSwitcherOptionSizeType::Md => SelectItemSizeType::Md,
            ThemeSwitcherOptionSizeType::Lg => SelectItemSizeType::Lg,
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct ThemeSwitcherOptionProps {
    pub value: String,
    #[props(default)]
    pub size: ThemeSwitcherOptionSizeType,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// A single theme entry rendered inside the theme-switcher select popup.
#[component]
pub fn ThemeSwitcherOption(props: ThemeSwitcherOptionProps) -> Element {
    let value = props.value.clone();
    let label_text = theme_label(&value);
    let scheme_suffix = theme_scheme_suffix(&value);
    let icon_class = props.size.icon_class();
    let item_size: SelectItemSizeType = props.size.into();

    let option_content = match value.as_str() {
        "light" => rsx! {
            SunIcon { class: icon_class }
            {label_text}
            if let Some(suffix) = scheme_suffix {
                span { class: "text-muted-foreground", {suffix} }
            }
        },
        "dark" => rsx! {
            MoonIcon { class: icon_class }
            {label_text}
            if let Some(suffix) = scheme_suffix {
                span { class: "text-muted-foreground", {suffix} }
            }
        },
        _ => rsx! {
            MonitorIcon { class: icon_class }
            {label_text}
            if let Some(suffix) = scheme_suffix {
                span { class: "text-muted-foreground", {suffix} }
            }
        },
    };

    rsx! {
        SelectItem {
            "data-slot": "theme-switcher-option",
            value: props.value.clone(),
            label: label_text.to_string(),
            size: item_size,
            class: cn(["", props.class.as_deref().unwrap_or_default()]),
            attributes: props.attributes,
            {option_content}
        }
    }
}
