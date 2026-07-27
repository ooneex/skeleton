use dioxus::document::eval;
use dioxus::prelude::*;

use super::LanguageSwitcherOption::{
    LANGUAGES, LanguageSwitcherOption, LanguageSwitcherOptionSizeType, language_label,
};
use super::flags::{
    EnglishFlag, FranceFlag, GermanyFlag, GreeceFlag, PortugalFlag, RomaniaFlag, SpainFlag,
    SweedenFlag,
};
use crate::components::select::{Select, SelectContent, SelectTrigger};
use crate::hooks::use_controlled_state;
use crate::utils::cn;

fn flag_class_for_size(size: LanguageSwitcherSizeType) -> &'static str {
    match size {
        LanguageSwitcherSizeType::Xs => "size-3.5 shrink-0",
        LanguageSwitcherSizeType::Sm => "size-4 shrink-0",
        LanguageSwitcherSizeType::Md => "size-4.5 shrink-0",
        LanguageSwitcherSizeType::Lg => "size-5 shrink-0",
    }
}

fn label_class_for_size(size: LanguageSwitcherSizeType) -> &'static str {
    match size {
        LanguageSwitcherSizeType::Xs => "text-foreground text-xs",
        LanguageSwitcherSizeType::Sm => "text-foreground text-sm",
        LanguageSwitcherSizeType::Md => "text-foreground text-base",
        LanguageSwitcherSizeType::Lg => "text-foreground text-lg",
    }
}

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum LanguageSwitcherSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl LanguageSwitcherSizeType {
    fn as_option_size(self) -> LanguageSwitcherOptionSizeType {
        match self {
            Self::Xs => LanguageSwitcherOptionSizeType::Xs,
            Self::Sm => LanguageSwitcherOptionSizeType::Sm,
            Self::Md => LanguageSwitcherOptionSizeType::Md,
            Self::Lg => LanguageSwitcherOptionSizeType::Lg,
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct LanguageSwitcherProps {
    /// Controlled language code.
    #[props(default)]
    pub value: Option<String>,
    /// Initial language when uncontrolled. Defaults to `"en"`.
    #[props(default = Some("en".to_string()))]
    pub default_value: Option<String>,
    /// Emitted whenever the language changes.
    pub on_change: Option<EventHandler<String>>,
    #[props(default)]
    pub size: LanguageSwitcherSizeType,
    #[props(default = false)]
    pub disabled: bool,
    /// Applied to the select trigger.
    #[props(default)]
    pub class: Option<String>,
}

/// A `Select`-based language picker. Lists every supported language (flag +
/// label) and reports the chosen one via `on_change`.
///
/// The active language is mirrored onto `<html lang>` so assistive technology
/// and CSS can react to language changes.
#[component]
pub fn LanguageSwitcher(props: LanguageSwitcherProps) -> Element {
    let default_val = props
        .default_value
        .clone()
        .unwrap_or_else(|| "en".to_string());

    let (language, set_language) =
        use_controlled_state(props.value.clone(), default_val, props.on_change);

    // Mirror the active language onto <html lang>.
    use_effect(move || {
        let lang = language.read().clone();
        let script = format!(r#"document.documentElement.lang = "{lang}";"#);
        eval(&script);
    });

    let current = language.read().clone();
    let size = props.size;

    rsx! {
        Select {
            value: current.clone(),
            on_value_change: move |next: String| {
                if !next.is_empty() {
                    set_language.call(next);
                }
            },
            disabled: props.disabled,
            SelectTrigger {
                "data-slot": "language-switcher",
                "aria-label": "Language",
                class: cn(["", props.class.as_deref().unwrap_or_default()]),
                span { class: "flex items-center gap-2",
                    match current.as_str() {
                        "en" => rsx! { EnglishFlag { class: flag_class_for_size(size) } },
                        "fr" => rsx! { FranceFlag { class: flag_class_for_size(size) } },
                        "de" => rsx! { GermanyFlag { class: flag_class_for_size(size) } },
                        "el" => rsx! { GreeceFlag { class: flag_class_for_size(size) } },
                        "pt" => rsx! { PortugalFlag { class: flag_class_for_size(size) } },
                        "ro" => rsx! { RomaniaFlag { class: flag_class_for_size(size) } },
                        "es" => rsx! { SpainFlag { class: flag_class_for_size(size) } },
                        "sv" => rsx! { SweedenFlag { class: flag_class_for_size(size) } },
                        _ => rsx! {},
                    }
                    span { class: label_class_for_size(size), {language_label(&current)} }
                }
            }
            SelectContent { class: "min-w-3xs",
                for &code in LANGUAGES.iter() {
                    LanguageSwitcherOption {
                        key: "{code}",
                        value: code.to_string(),
                        size: size.as_option_size(),
                    }
                }
            }
        }
    }
}
