use dioxus::prelude::*;

use crate::hooks::use_id;
use crate::icons::outline::ui_layout::sm::XmarkIcon;
use crate::utils::cn;

use super::DialogContext::DialogContextValue;
use super::DialogOverlay::DialogOverlay;
use super::DialogPortal::DialogPortal;
use super::useDialogBehavior::{DialogModalType, use_dialog_behavior};

#[derive(Props, Clone, PartialEq)]
pub struct DialogContentProps {
    /// Controls the dialog's open state from the outside. Defaults to `true`
    /// so a conditionally-rendered `<DialogContent>` is open by default.
    #[props(default = true)]
    pub open: bool,
    /// Called when the dialog is dismissed via Escape, outside click, or the
    /// close button.
    pub on_dismiss: Option<EventHandler<()>>,
    /// Show the floating close button in the top-right corner.
    #[props(default = false)]
    pub show_close_button: bool,
    /// [`DialogModalType::Modal`] (default) locks scroll and blocks page
    /// interaction. [`DialogModalType::TrapFocus`] keeps the page interactive
    /// but holds focus in the dialog. [`DialogModalType::None`] does neither.
    #[props(default)]
    pub modal: DialogModalType,
    /// Disable dismissal by clicking the overlay (Escape still closes).
    #[props(default = false)]
    pub disable_pointer_dismissal: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn DialogContent(props: DialogContentProps) -> Element {
    let title_id = use_id("dialog-title");
    let description_id = use_id("dialog-description");
    let popup_id = use_id("dialog-popup");

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

    use_dialog_behavior(open, props.modal, popup_id.clone(), dismiss);

    let disable_pointer = props.disable_pointer_dismissal;
    let overlay_dismiss: Option<EventHandler<()>> = if disable_pointer {
        None
    } else {
        Some(EventHandler::new(move |()| dismiss.call(())))
    };

    use_context_provider(|| DialogContextValue {
        open,
        dismiss,
        title_id: title_id_signal,
        description_id: description_id_signal,
        has_title,
        has_description,
    });

    rsx! {
        DialogPortal {
            DialogOverlay {
                open: props.open,
                blocking: props.modal.is_blocking(),
                on_dismiss: overlay_dismiss,
            }
            div {
                id: popup_id,
                role: "dialog",
                "aria-modal": props.modal.is_blocking().then_some("true"),
                "aria-labelledby": (*has_title.read()).then(|| title_id.clone()),
                "aria-describedby": (*has_description.read()).then(|| description_id.clone()),
                tabindex: "-1",
                "data-slot": "dialog-content",
                "data-open": props.open.then_some(""),
                "data-closed": (!props.open).then_some(""),
                class: cn([
                    "bg-white border data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 grid w-full gap-6 rounded p-4 text-sm duration-100 max-w-2xl fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 outline-none border-none shadow-none",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                ..props.attributes,
                {props.children}
                if props.show_close_button {
                    button {
                        r#type: "button",
                        "data-slot": "dialog-close",
                        onclick: move |_| dismiss.call(()),
                        class: "absolute -top-3 -right-3 z-10 flex size-8 items-center justify-center rounded-full bg-card shadow-none border-none ring-[0.2px] ring-ring cursor-pointer transition-opacity hover:opacity-70",
                        XmarkIcon { class: "text-foreground" }
                        span { class: "sr-only", "Close" }
                    }
                }
            }
        }
    }
}
