use dioxus::document::eval;
use dioxus::prelude::*;

use crate::hooks::use_id;
use crate::utils::cn;

use super::DrawerOverlay::DrawerOverlay;
use super::DrawerPortal::DrawerPortal;
use super::drawerContext::DrawerContextValue;

#[derive(Props, Clone, PartialEq)]
pub struct DrawerContentProps {
    #[props(default = true)]
    pub open: bool,
    pub on_dismiss: Option<EventHandler<()>>,
    /// Edge the drawer slides in from. Defaults to `"bottom"`.
    #[props(default = "bottom".to_string())]
    pub side: String,
    /// `false` keeps the page interactive behind the drawer.
    #[props(default = true)]
    pub modal: bool,
    /// Disable outside-click/Escape dismissal.
    #[props(default = true)]
    pub dismissible: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn DrawerContent(props: DrawerContentProps) -> Element {
    let title_id_str = use_id("drawer-title");
    let description_id_str = use_id("drawer-description");
    let popup_id_str = use_id("drawer-popup");

    let mut open = use_signal(|| props.open);
    let has_title = use_signal(|| false);
    let has_description = use_signal(|| false);
    let title_id = use_signal(|| title_id_str.clone());
    let description_id = use_signal(|| description_id_str.clone());
    let popup_id = use_signal(|| popup_id_str.clone());

    let controlled_open = props.open;
    use_effect(use_reactive!(|(controlled_open,)| {
        open.set(controlled_open);
    }));

    let on_dismiss_handler = props.on_dismiss;
    let dismissible = props.dismissible;
    let dismiss = use_callback(move |()| {
        if dismissible {
            if let Some(handler) = on_dismiss_handler {
                handler.call(());
            }
        }
    });

    use_future(move || async move {
        let mut event_stream = eval(
            r#"
            const handler = (e) => {
                if (e.key === "Escape" && !e.defaultPrevented) {
                    dioxus.send(true);
                    e.preventDefault();
                }
            };
            document.addEventListener("keydown", handler, { capture: true });
            await dioxus.recv();
            document.removeEventListener("keydown", handler, { capture: true });
            "#,
        );

        while event_stream.recv::<bool>().await.is_ok() {
            if *open.read() {
                dismiss.call(());
            }
        }
    });

    let modal = props.modal;
    use_effect(move || {
        if !modal {
            return;
        }
        let is_open = *open.read();
        spawn(async move {
            if is_open {
                let _ = eval("document.body.style.overflow='hidden';").await;
            } else {
                let _ = eval("document.body.style.overflow='';").await;
            }
        });
    });

    use_effect(move || {
        if !*open.read() {
            return;
        }
        let id = popup_id_str.clone();
        spawn(async move {
            let _ = eval(&format!(
                r#"const el=document.getElementById("{id}");if(el){{(el.querySelector("[autofocus],[data-autofocus]")??el).focus();}}"#
            ))
            .await;
        });
    });

    use_context_provider(|| DrawerContextValue {
        open,
        dismiss,
        title_id,
        description_id,
        has_title,
        has_description,
        popup_id,
    });

    let is_open = props.open;
    let side = props.side.clone();
    let overlay_dismiss = if props.dismissible {
        Some(EventHandler::new(move |()| dismiss.call(())))
    } else {
        None
    };

    rsx! {
        DrawerPortal {
            DrawerOverlay {
                open: is_open,
                blocking: modal,
                on_dismiss: overlay_dismiss,
            }
            div {
                id: popup_id.read().clone(),
                role: "dialog",
                "aria-modal": if modal { "true" } else { "" },
                "aria-labelledby": if *has_title.read() { title_id.read().clone() } else { String::new() },
                "aria-describedby": if *has_description.read() { description_id.read().clone() } else { String::new() },
                tabindex: "-1",
                "data-slot": "drawer-content",
                "data-side": side.clone(),
                "data-open": is_open.then_some(""),
                "data-closed": (!is_open).then_some(""),
                class: cn([
                    "bg-background flex h-auto flex-col text-sm data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:mt-24 data-[side=bottom]:max-h-[80vh] data-[side=bottom]:rounded-t-none data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:w-3/4 data-[side=left]:rounded-r-none data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:w-3/4 data-[side=right]:rounded-l-none data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:mb-24 data-[side=top]:max-h-[80vh] data-[side=top]:rounded-b-none data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm group/drawer-content fixed z-50 outline-none",
                    "sm:min-w-2xl data-open:animate-in data-closed:animate-out data-closed:fill-mode-forwards duration-200 data-[side=bottom]:slide-in-from-bottom data-[side=bottom]:slide-out-to-bottom data-[side=left]:slide-in-from-left data-[side=left]:slide-out-to-left data-[side=right]:slide-in-from-right data-[side=right]:slide-out-to-right data-[side=top]:slide-in-from-top data-[side=top]:slide-out-to-top",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                ..props.attributes,
                div { class: "bg-muted mx-auto mt-4 hidden h-1.5 w-25 shrink-0 rounded-full group-data-[side=bottom]/drawer-content:block" }
                {props.children}
            }
        }
    }
}
