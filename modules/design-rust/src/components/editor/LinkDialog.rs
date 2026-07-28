use dioxus::prelude::*;

/// State for the link dialog. Mount [`LinkDialog`] inside the editor tree;
/// opening is done by rendering it with `open: true`.
///
/// **Gap**: The TS original uses `createDialog` (react-call), an async
/// imperative API. In this Rust port the dialog is a controlled component
/// whose state lives in the calling toolbar button.
#[derive(Props, Clone, PartialEq)]
pub struct LinkDialogProps {
    pub open: bool,
    pub initial_href: String,
    pub is_active: bool,
    pub on_submit: EventHandler<String>,
    pub on_remove: EventHandler<()>,
    pub on_cancel: EventHandler<()>,
}

#[component]
pub fn LinkDialog(props: LinkDialogProps) -> Element {
    let mut url = use_signal(|| props.initial_href.clone());
    let mut error = use_signal(String::new);
    let is_active = props.is_active;
    let is_open = props.open;

    // Each opening starts from the href of the link currently under the caret,
    // mirroring the fresh `openLinkDialog({ initialHref })` call in the TS source.
    let initial_href = props.initial_href.clone();
    use_effect(move || {
        if is_open {
            url.set(initial_href.clone());
            error.set(String::new());
        }
    });

    if !is_open {
        return rsx! {};
    }

    rsx! {
        div {
            class: "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
            div {
                class: "bg-popover text-popover-foreground rounded ring ring-border p-4 shadow-lg w-80 flex flex-col gap-3",
                onclick: move |e| { e.stop_propagation(); },
                h2 { class: "text-sm font-semibold",
                    if is_active { "Edit Link" } else { "Add Link" }
                }
                p { class: "text-xs text-muted-foreground", "Enter the URL you want to link to." }
                input {
                    r#type: "url",
                    placeholder: "https://www.google.com",
                    class: "h-8 rounded border border-border px-2 text-sm w-full bg-background",
                    value: "{url}",
                    oninput: move |e| { url.set(e.value()); error.set(String::new()); },
                    onkeydown: {
                        let on_submit = props.on_submit;
                        let on_cancel = props.on_cancel;
                        move |e: KeyboardEvent| {
                            match e.key() {
                                Key::Enter => {
                                    let href = url.read().clone();
                                    if !href.starts_with("http://") && !href.starts_with("https://") {
                                        error.set("Please enter a valid URL".into());
                                        return;
                                    }
                                    on_submit.call(href);
                                }
                                Key::Escape => on_cancel.call(()),
                                _ => {}
                            }
                        }
                    },
                }
                if !error.read().is_empty() {
                    p { class: "text-destructive text-xs", "{error}" }
                }
                div { class: "flex gap-2 justify-end",
                    if is_active {
                        button {
                            r#type: "button",
                            class: "text-destructive text-xs px-2 py-1 rounded hover:bg-accent mr-auto",
                            onclick: move |_| { props.on_remove.call(()); },
                            "Remove"
                        }
                    }
                    button {
                        r#type: "button",
                        class: "text-xs px-2 py-1 rounded hover:bg-accent border border-border",
                        onclick: move |_| { props.on_cancel.call(()); },
                        "Cancel"
                    }
                    button {
                        r#type: "button",
                        class: "text-xs px-2 py-1 rounded bg-primary text-primary-foreground hover:opacity-90",
                        onclick: {
                            let on_submit = props.on_submit;
                            move |_| {
                                let href = url.read().clone();
                                if !href.starts_with("http://") && !href.starts_with("https://") {
                                    error.set("Please enter a valid URL".into());
                                    return;
                                }
                                on_submit.call(href);
                            }
                        },
                        if is_active { "Save" } else { "Add" }
                    }
                }
            }
        }
    }
}
