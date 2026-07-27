use dioxus::prelude::*;

/// "Embed YouTube video" dialog — a controlled popup.
///
/// **Gap**: The TS original uses `createDialog` (react-call). This Rust port
/// is a controlled component whose open state lives in the caller.
#[derive(Props, Clone, PartialEq)]
pub struct YouTubeDialogProps {
    pub open: bool,
    pub on_submit: EventHandler<String>,
    pub on_cancel: EventHandler<()>,
}

#[component]
pub fn YouTubeDialog(props: YouTubeDialogProps) -> Element {
    let mut url = use_signal(String::new);
    let mut error = use_signal(String::new);
    let is_open = props.open;

    // Each opening starts from a blank field, mirroring the fresh
    // `openYouTubeDialog()` call in the TS source.
    use_effect(move || {
        if is_open {
            url.set(String::new());
            error.set(String::new());
        }
    });

    if !is_open {
        return rsx! {};
    }

    let is_valid_yt = |s: &str| s.contains("youtu.be/") || s.contains("v=");

    rsx! {
        div {
            class: "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
            div {
                class: "bg-popover text-popover-foreground rounded ring ring-border p-4 shadow-lg w-80 flex flex-col gap-3",
                onclick: move |e| { e.stop_propagation(); },
                h2 { class: "text-sm font-semibold", "Embed YouTube Video" }
                p { class: "text-xs text-muted-foreground",
                    "Enter the URL of the YouTube video you want to embed."
                }
                input {
                    r#type: "url",
                    placeholder: "https://www.youtube.com/watch?v=...",
                    class: "h-8 rounded border border-border px-2 text-sm w-full bg-background",
                    value: "{url}",
                    oninput: move |e| { url.set(e.value()); error.set(String::new()); },
                    onkeydown: {
                        let on_submit = props.on_submit.clone();
                        let on_cancel = props.on_cancel.clone();
                        move |e: KeyboardEvent| {
                            match e.key() {
                                Key::Enter => {
                                    let u = url.read().clone();
                                    if !is_valid_yt(&u) { error.set("Please enter a valid YouTube URL".into()); return; }
                                    on_submit.call(u);
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
                            let on_submit = props.on_submit.clone();
                            move |_| {
                                let u = url.read().clone();
                                if !is_valid_yt(&u) { error.set("Please enter a valid YouTube URL".into()); return; }
                                on_submit.call(u);
                            }
                        },
                        "Embed"
                    }
                }
            }
        }
    }
}
