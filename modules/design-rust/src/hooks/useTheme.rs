use dioxus::document::eval;
use dioxus::prelude::*;

use crate::components::theme::ThemeType;
use crate::hooks::use_controlled_state;

/// `localStorage` key under which the last chosen theme is persisted.
pub const THEME_STORAGE_KEY: &str = "theme";

/// The theme that follows the OS preference instead of picking a surface, also
/// the selection every uncontrolled `use_theme` starts from.
const SYSTEM_THEME: ThemeType = "system";

/// Every selectable theme, mirroring the catalog the switcher renders in
/// `components/theme/ThemeSwitcherOption`. Persisted codes outside this list are
/// ignored, so a removed theme cannot come back from storage.
const THEMES: [ThemeType; 3] = ["system", "light", "dark"];

/// Whether the active theme paints on a light or a dark surface.
#[derive(Clone, Copy, PartialEq, Eq, Default, Debug)]
pub enum ThemeSchemeType {
    #[default]
    Light,
    Dark,
}

impl ThemeSchemeType {
    /// The code this scheme is written as in `<html data-theme>`.
    pub fn as_str(&self) -> ThemeType {
        match self {
            Self::Light => "light",
            Self::Dark => "dark",
        }
    }
}

#[derive(Clone, Copy, Default)]
pub struct UseThemeOptionsType {
    /// Controlled selection; when set, the hook mirrors it instead of owning state.
    pub value: Option<ThemeType>,
    /// Initial selection when uncontrolled and nothing is persisted yet.
    pub default_value: Option<ThemeType>,
    /// Notified whenever the selection changes.
    pub on_change: Option<EventHandler<ThemeType>>,
}

/// Own the theme selection: seed it from `localStorage` (falling back to
/// `default_value`), mirror it onto `<html data-theme>`, and persist every
/// change so it survives reloads. Supports controlled use through
/// `value`/`on_change`.
///
/// The browser is only reachable asynchronously here, so — unlike the React
/// original, which restores the persisted theme before the first paint — the
/// selection starts at `default_value` and switches to the stored one right
/// after mount. Persisting is held back until that restore has settled so the
/// default cannot overwrite what was saved.
pub fn use_theme(options: UseThemeOptionsType) -> (Signal<ThemeType>, Callback<ThemeType>) {
    let (theme, set_theme) = use_controlled_state(
        options.value,
        options.default_value.unwrap_or(SYSTEM_THEME),
        options.on_change,
    );

    let is_controlled = options.value.is_some();
    let mut restored = use_signal(|| false);

    use_effect(move || {
        if is_controlled {
            restored.set(true);
            return;
        }

        spawn(async move {
            let mut stored = eval(&format!(
                r#"
                let stored = null;
                try {{ stored = localStorage.getItem("{THEME_STORAGE_KEY}"); }} catch {{}}
                dioxus.send(stored);
                "#
            ));

            if let Ok(Some(code)) = stored.recv::<Option<String>>().await
                && let Some(theme) = known_theme(&code)
            {
                set_theme.call(theme);
            }

            restored.set(true);
        });
    });

    use_effect(move || {
        if !restored() {
            return;
        }

        let theme = theme();
        eval(&format!(
            r#"try {{ localStorage.setItem("{THEME_STORAGE_KEY}", "{theme}"); }} catch {{}}"#
        ));
    });

    use_apply_theme(theme());

    (theme, set_theme)
}

/// Mirror `theme` onto `<html data-theme>` so the matching `.light`/`.dark`
/// stylesheet applies, resolving `system` to the OS preference and following it
/// while `system` stays selected.
pub fn use_apply_theme(theme: ThemeType) {
    let prefers_dark = use_prefers_dark();

    use_effect(use_reactive!(|(theme,)| {
        let resolved = resolve_theme(theme, prefers_dark());
        eval(&format!(
            r#"document.documentElement.dataset.theme = "{resolved}";"#
        ));
    }));
}

/// Track whether the active theme renders on a light or dark surface, following
/// every theme change — not just the base `dark` theme — by watching
/// `<html data-theme>`, where the already-resolved theme is mirrored.
pub fn use_theme_scheme() -> ReadSignal<ThemeSchemeType> {
    let mut scheme = use_signal(ThemeSchemeType::default);

    use_future(move || async move {
        let mut listener = eval(
            r#"
            const root = document.documentElement;
            const send = () => dioxus.send(root.dataset.theme ?? "");
            const observer = new MutationObserver(send);
            observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
            send();
            await dioxus.recv();
            observer.disconnect();
            "#,
        );

        while let Ok(theme) = listener.recv::<String>().await {
            scheme.set(theme_scheme(&theme));
        }
    });

    ReadSignal::new(scheme)
}

/// Track the OS `prefers-color-scheme` preference, following every change, so
/// the `system` theme keeps resolving to the surface the user asked for.
fn use_prefers_dark() -> ReadSignal<bool> {
    let mut prefers_dark = use_signal(|| false);

    use_future(move || async move {
        let mut listener = eval(
            r#"
            const query = window.matchMedia("(prefers-color-scheme: dark)");
            const send = () => dioxus.send(query.matches);
            query.addEventListener("change", send);
            send();
            await dioxus.recv();
            query.removeEventListener("change", send);
            "#,
        );

        while let Ok(value) = listener.recv::<bool>().await {
            prefers_dark.set(value);
        }
    });

    ReadSignal::new(prefers_dark)
}

/// The concrete theme to put on `<html>`, standing in for `system`.
fn resolve_theme(theme: ThemeType, prefers_dark: bool) -> ThemeType {
    if theme != SYSTEM_THEME {
        return theme;
    }

    if prefers_dark {
        ThemeSchemeType::Dark.as_str()
    } else {
        ThemeSchemeType::Light.as_str()
    }
}

/// The surface a theme code paints on; anything unknown is treated as light.
fn theme_scheme(theme: &str) -> ThemeSchemeType {
    if theme == ThemeSchemeType::Dark.as_str() {
        ThemeSchemeType::Dark
    } else {
        ThemeSchemeType::Light
    }
}

/// The catalog entry matching a persisted code, discarding unknown ones.
fn known_theme(code: &str) -> Option<ThemeType> {
    THEMES.into_iter().find(|theme| *theme == code)
}
