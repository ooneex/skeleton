use dioxus::prelude::*;

use crate::hooks::use_id;
use crate::utils::cn;

use super::AlertDialogOverlay::AlertDialogOverlay;
use super::AlertDialogPortal::AlertDialogPortal;
use super::DialogContext::DialogContextValue;
use super::useDialogBehavior::use_dialog_behavior;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum AlertDialogSizeType {
    #[default]
    Md,
    Sm,
}

impl AlertDialogSizeType {
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Md => "md",
            Self::Sm => "sm",
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct AlertDialogContentProps {
    #[props(default = AlertDialogSizeType::Md)]
    pub size: AlertDialogSizeType,
    #[props(default = true)]
    pub open: bool,
    /// Called when the dialog is dismissed with Escape. Outside clicks never
    /// dismiss an alert dialog.
    pub on_dismiss: Option<EventHandler<()>>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn AlertDialogContent(props: AlertDialogContentProps) -> Element {
    let title_id = use_id("alert-dialog-title");
    let description_id = use_id("alert-dialog-description");
    let popup_id = use_id("alert-dialog-popup");

    let mut open = use_signal(|| props.open);
    let has_title = use_signal(|| false);
    let has_description = use_signal(|| false);
    let title_id_signal = use_signal(|| title_id.clone());
    let description_id_signal = use_signal(|| description_id.clone());

    let controlled_open = props.open;
    use_effect(use_reactive!(|(controlled_open,)| {
        open.set(controlled_open);
    }));

    let on_dismiss_handler = props.on_dismiss;
    let dismiss = use_callback(move |()| {
        if let Some(h) = on_dismiss_handler {
            h.call(());
        }
    });

    // Alert dialogs are always modal; outside clicks do NOT dismiss them.
    use_dialog_behavior(open, true, popup_id.clone(), dismiss);

    use_context_provider(|| DialogContextValue {
        open,
        dismiss,
        title_id: title_id_signal,
        description_id: description_id_signal,
        has_title,
        has_description,
    });

    rsx! {
        AlertDialogPortal {
            AlertDialogOverlay { open: props.open }
            div {
                id: popup_id,
                role: "alertdialog",
                "aria-modal": "true",
                "aria-labelledby": (*has_title.read()).then(|| title_id.clone()),
                "aria-describedby": (*has_description.read()).then(|| description_id.clone()),
                tabindex: "-1",
                "data-slot": "alert-dialog-content",
                "data-size": props.size.as_str(),
                "data-open": props.open.then_some(""),
                "data-closed": (!props.open).then_some(""),
                class: cn([
                    "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 bg-background ring-foreground/10 gap-6 rounded p-6 ring-1 duration-100 data-[size=md]:max-w-xs data-[size=sm]:max-w-xs data-[size=md]:sm:max-w-lg group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                ..props.attributes,
                {props.children}
            }
        }
    }
}
