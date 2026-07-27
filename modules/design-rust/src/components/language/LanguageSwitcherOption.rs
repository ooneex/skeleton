use dioxus::prelude::*;

use super::flags::{
    EnglishFlag, FranceFlag, GermanyFlag, GreeceFlag, PortugalFlag, RomaniaFlag, SpainFlag,
    SweedenFlag,
};
use crate::components::select::{SelectItem, SelectItemSizeType};
use crate::utils::cn;

/// ISO 639-1 language code.
pub type LanguageType = &'static str;

/// All supported language codes in display order.
pub static LANGUAGES: &[LanguageType] = &["en", "fr", "de", "el", "pt", "ro", "es", "sv"];

/// Human-readable name for each language code. Unknown codes are displayed
/// verbatim, so the returned label borrows from `code`.
pub fn language_label(code: &str) -> &str {
    match code {
        "en" => "English",
        "fr" => "Français",
        "de" => "Deutsch",
        "el" => "Ελληνικά",
        "pt" => "Português",
        "ro" => "Română",
        "es" => "Español",
        "sv" => "Svenska",
        _ => code,
    }
}

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum LanguageSwitcherOptionSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl LanguageSwitcherOptionSizeType {
    pub fn flag_class(&self) -> &'static str {
        match self {
            Self::Xs => "size-3.5 shrink-0",
            Self::Sm => "size-4 shrink-0",
            Self::Md => "size-4.5 shrink-0",
            Self::Lg => "size-5 shrink-0",
        }
    }
}

impl From<LanguageSwitcherOptionSizeType> for SelectItemSizeType {
    fn from(s: LanguageSwitcherOptionSizeType) -> Self {
        match s {
            LanguageSwitcherOptionSizeType::Xs => SelectItemSizeType::Xs,
            LanguageSwitcherOptionSizeType::Sm => SelectItemSizeType::Sm,
            LanguageSwitcherOptionSizeType::Md => SelectItemSizeType::Md,
            LanguageSwitcherOptionSizeType::Lg => SelectItemSizeType::Lg,
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct LanguageSwitcherOptionProps {
    pub value: String,
    #[props(default)]
    pub size: LanguageSwitcherOptionSizeType,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// A single language entry rendered inside the language-switcher select popup.
#[component]
pub fn LanguageSwitcherOption(props: LanguageSwitcherOptionProps) -> Element {
    let code = props.value.clone();
    let label = language_label(&code);
    let flag_class = props.size.flag_class();
    let item_size: SelectItemSizeType = props.size.into();

    let flag_element = match code.as_str() {
        "en" => rsx! { EnglishFlag { class: flag_class } {label} },
        "fr" => rsx! { FranceFlag { class: flag_class } {label} },
        "de" => rsx! { GermanyFlag { class: flag_class } {label} },
        "el" => rsx! { GreeceFlag { class: flag_class } {label} },
        "pt" => rsx! { PortugalFlag { class: flag_class } {label} },
        "ro" => rsx! { RomaniaFlag { class: flag_class } {label} },
        "es" => rsx! { SpainFlag { class: flag_class } {label} },
        "sv" => rsx! { SweedenFlag { class: flag_class } {label} },
        _ => rsx! { {label} },
    };

    rsx! {
        SelectItem {
            "data-slot": "language-switcher-option",
            value: props.value.clone(),
            label: label.to_string(),
            size: item_size,
            class: cn(["", props.class.as_deref().unwrap_or_default()]),
            attributes: props.attributes,
            {flag_element}
        }
    }
}
