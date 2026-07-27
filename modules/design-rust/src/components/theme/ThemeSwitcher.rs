use dioxus::document::eval;
use dioxus::prelude::*;

use super::ThemeSwitcherOption::{
    ThemeSwitcherOption, ThemeSwitcherOptionSizeType, ThemeType, theme_label,
};
use crate::components::select::{
    Select, SelectContent, SelectGroup, SelectLabel, SelectSeparator, SelectTrigger,
};
use crate::hooks::use_controlled_state;
use crate::icons::outline::design_development::sm::MonitorIcon;
use crate::icons::outline::energy_environment::sm::SunIcon;
use crate::icons::outline::weather::sm::MoonIcon;
use crate::utils::cn;

/// All supported themes grouped by category.
static THEME_GROUPS: &[(&str, &[ThemeType])] = &[("Base Themes", &["system", "light", "dark"])];

const THEME_STORAGE_KEY: &str = "theme";

fn icon_class_for_size(size: ThemeSwitcherSizeType) -> &'static str {
    match size {
        ThemeSwitcherSizeType::Xs => "size-3.5 shrink-0",
        ThemeSwitcherSizeType::Sm => "size-4 shrink-0",
        ThemeSwitcherSizeType::Md => "size-4.5 shrink-0",
        ThemeSwitcherSizeType::Lg => "size-5 shrink-0",
    }
}

fn label_class_for_size(size: ThemeSwitcherSizeType) -> &'static str {
    match size {
        ThemeSwitcherSizeType::Xs => "text-foreground text-xs",
        ThemeSwitcherSizeType::Sm => "text-foreground text-sm",
        ThemeSwitcherSizeType::Md => "text-foreground text-base",
        ThemeSwitcherSizeType::Lg => "text-foreground text-lg",
    }
}

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum ThemeSwitcherSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl ThemeSwitcherSizeType {
    fn as_option_size(self) -> ThemeSwitcherOptionSizeType {
        match self {
            Self::Xs => ThemeSwitcherOptionSizeType::Xs,
            Self::Sm => ThemeSwitcherOptionSizeType::Sm,
            Self::Md => ThemeSwitcherOptionSizeType::Md,
            Self::Lg => ThemeSwitcherOptionSizeType::Lg,
        }
    }

    fn as_trigger_str(self) -> &'static str {
        match self {
            Self::Xs => "xs",
            Self::Sm => "sm",
            Self::Md => "md",
            Self::Lg => "lg",
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct ThemeSwitcherProps {
    /// Controlled theme value (`"system"`, `"light"`, `"dark"`, …).
    #[props(default)]
    pub value: Option<String>,
    /// Initial theme when uncontrolled. Defaults to `"system"`.
    #[props(default = Some("system".to_string()))]
    pub default_value: Option<String>,
    /// Emitted whenever the theme changes.
    pub on_change: Option<EventHandler<String>>,
    #[props(default)]
    pub size: ThemeSwitcherSizeType,
    #[props(default = false)]
    pub disabled: bool,
    /// Applied to the select trigger.
    #[props(default)]
    pub class: Option<String>,
}

/// A `Select`-based theme picker. Lists every supported theme (icon + label)
/// and reports the chosen one via `on_change`.
///
/// The selection is persisted to `localStorage` when uncontrolled and restored
/// on the next visit. The resolved theme is mirrored onto `<html data-theme>`,
/// tracking the OS `prefers-color-scheme` preference while `system` is active.
#[component]
pub fn ThemeSwitcher(props: ThemeSwitcherProps) -> Element {
    let default_val = props
        .default_value
        .clone()
        .unwrap_or_else(|| "system".to_string());

    let (theme, set_theme) =
        use_controlled_state(props.value.clone(), default_val, props.on_change);

    // Restore persisted theme on mount (uncontrolled only).
    let is_controlled = props.value.is_some();
    use_effect(move || {
        if is_controlled {
            return;
        }
        spawn(async move {
            let mut e = eval(
                r#"
                const stored = localStorage.getItem("theme");
                const valid = ["system","light","dark"];
                dioxus.send(valid.includes(stored) ? stored : null);
                "#,
            );
            if let Ok(Some(stored)) = e.recv::<Option<String>>().await {
                set_theme.call(stored);
            }
        });
    });

    // Persist every selection.
    use_effect(move || {
        let t = theme.read().clone();
        let script = format!(r#"localStorage.setItem("{THEME_STORAGE_KEY}", "{t}");"#);
        eval(&script);
    });

    // Apply the resolved theme to <html data-theme>.
    use_effect(move || {
        let t = theme.read().clone();
        let script = format!(
            r#"
            (function() {{
                const theme = "{t}";
                if (theme === "system") {{
                    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    document.documentElement.dataset.theme = dark ? "dark" : "light";
                }} else {{
                    document.documentElement.dataset.theme = theme;
                }}
            }})();
            "#
        );
        eval(&script);
    });

    let current = theme.read().clone();
    let size = props.size;

    rsx! {
        Select {
            value: current.clone(),
            on_value_change: move |next: String| {
                if !next.is_empty() {
                    set_theme.call(next);
                }
            },
            disabled: props.disabled,
            SelectTrigger {
                "data-slot": "theme-switcher",
                "aria-label": "Theme",
                class: cn(["", props.class.as_deref().unwrap_or_default()]),
                span { class: "flex items-center gap-2",
                    match current.as_str() {
                        "light" => rsx! { SunIcon { class: icon_class_for_size(size) } },
                        "dark" => rsx! { MoonIcon { class: icon_class_for_size(size) } },
                        _ => rsx! { MonitorIcon { class: icon_class_for_size(size) } },
                    }
                    span { class: label_class_for_size(size), {theme_label(&current)} }
                }
            }
            SelectContent { class: "min-w-3xs",
                for (group_index , &(group_label , group_themes)) in THEME_GROUPS.iter().enumerate() {
                    if group_index > 0 {
                        SelectSeparator {}
                    }
                    SelectGroup {
                        SelectLabel { {group_label} }
                        for &theme_code in group_themes.iter() {
                            ThemeSwitcherOption {
                                key: "{theme_code}",
                                value: theme_code.to_string(),
                                size: size.as_option_size(),
                            }
                        }
                    }
                }
            }
        }
    }
}
