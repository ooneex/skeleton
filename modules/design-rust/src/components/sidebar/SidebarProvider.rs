use dioxus::document::eval;
use dioxus::prelude::*;

use crate::components::tooltip::TooltipProvider;
use crate::hooks::use_is_mobile;
use crate::utils::cn;

use super::constants::{
    SIDEBAR_COOKIE_MAX_AGE, SIDEBAR_COOKIE_NAME, SIDEBAR_KEYBOARD_SHORTCUT, SIDEBAR_WIDTH,
    SIDEBAR_WIDTH_ICON,
};
use super::useSidebar::{SidebarContextValue, SidebarStateType};

#[derive(Props, Clone, PartialEq)]
pub struct SidebarProviderProps {
    #[props(default = true)]
    pub default_open: bool,
    #[props(default)]
    pub open: Option<bool>,
    pub on_open_change: Option<EventHandler<bool>>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn SidebarProvider(props: SidebarProviderProps) -> Element {
    let is_mobile = use_is_mobile();
    let mut open_mobile = use_signal(|| false);
    let mut open = use_signal(|| props.open.unwrap_or(props.default_open));

    let controlled_open = props.open;
    use_effect(use_reactive!(|(controlled_open,)| {
        if let Some(value) = controlled_open {
            open.set(value);
        }
    }));

    use_future(move || async move {
        let mut event_stream = eval(&format!(
            r#"
            const name = "{SIDEBAR_COOKIE_NAME}=";
            const cookies = document.cookie.split(';');
            for (let cookie of cookies) {{
                cookie = cookie.trim();
                if (cookie.startsWith(name)) {{
                    dioxus.send(cookie.substring(name.length) === "true");
                    return;
                }}
            }}
            dioxus.send(null);
            "#
        ));

        if let Ok(value) = event_stream.recv::<Option<bool>>().await {
            if let Some(value) = value {
                if controlled_open.is_none() {
                    open.set(value);
                }
            }
        }
    });

    let on_open_change = props.on_open_change;
    let is_controlled = props.open.is_some();
    let set_open = use_callback(move |value: bool| {
        if !is_controlled {
            open.set(value);
        }
        if let Some(handler) = on_open_change {
            handler.call(value);
        }
        spawn(async move {
            let _ = eval(&format!(
                "document.cookie = `{SIDEBAR_COOKIE_NAME}={value}; path=/; max-age={SIDEBAR_COOKIE_MAX_AGE}`;"
            ))
            .await;
        });
    });

    let set_open_mobile = use_callback(move |value: bool| {
        open_mobile.set(value);
    });

    let toggle_sidebar = use_callback(move |()| {
        if *is_mobile.read() {
            let next_open = { !*open_mobile.read() };
            open_mobile.set(next_open);
        } else {
            set_open.call(!*open.read());
        }
    });

    use_future(move || async move {
        let mut event_stream = eval(&format!(
            r#"
            const handler = (event) => {{
                if (event.key === "{SIDEBAR_KEYBOARD_SHORTCUT}" && (event.metaKey || event.ctrlKey)) {{
                    event.preventDefault();
                    dioxus.send(true);
                }}
            }};
            window.addEventListener("keydown", handler);
            await dioxus.recv();
            window.removeEventListener("keydown", handler);
            "#
        ));

        while event_stream.recv::<bool>().await.is_ok() {
            toggle_sidebar.call(());
        }
    });

    let state = if *open.read() {
        SidebarStateType::Expanded
    } else {
        SidebarStateType::Collapsed
    };

    use_context_provider(|| SidebarContextValue {
        state,
        open,
        set_open,
        open_mobile,
        set_open_mobile,
        is_mobile,
        toggle_sidebar,
    });

    rsx! {
        TooltipProvider {
            div {
                "data-slot": "sidebar-wrapper",
                style: "--sidebar-width: {SIDEBAR_WIDTH}; --sidebar-width-icon: {SIDEBAR_WIDTH_ICON};",
                class: cn([
                    "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh w-full",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                ..props.attributes,
                {props.children}
            }
        }
    }
}
