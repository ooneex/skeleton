use std::sync::atomic::{AtomicUsize, Ordering};

use dioxus::prelude::*;

use crate::components::button::{ButtonSizeType, ButtonVariantType, button_variants};
use crate::icons::outline::loaders::sm::SpinnerLoaderIcon;
use crate::icons::outline::travel::sm::CircleInfoIcon;
use crate::icons::outline::ui_layout::sm::{
    CircleCheckIcon, CircleXmarkIcon, TriangleWarningIcon, XmarkIcon,
};
use crate::utils::cn;

const TOAST_DURATION_MS: u64 = 4000;
const UNMOUNTING_DELAY_MS: u64 = 200;

static NEXT_TOAST_ID: AtomicUsize = AtomicUsize::new(0);

/// Identifies a specific toast for targeted dismissal.
pub type ToastHandleType = usize;

#[derive(Clone, Copy, PartialEq, Eq)]
enum ToastStateType {
    Success,
    Error,
    Warning,
    Info,
    Loading,
}

#[derive(Clone, PartialEq)]
struct ToastEntry {
    id: ToastHandleType,
    state: ToastStateType,
    title: String,
    description: Option<String>,
    duration_ms: u64,
    open: bool,
    index: usize,
}

static TOAST_STORE: GlobalSignal<Vec<ToastEntry>> = GlobalSignal::new(Vec::new);

fn badge_class(state: ToastStateType) -> &'static str {
    match state {
        ToastStateType::Success => "bg-success-500",
        ToastStateType::Error => "bg-danger-500",
        ToastStateType::Warning => "bg-warning-500",
        ToastStateType::Info => "bg-info-500",
        ToastStateType::Loading => "bg-primary-400",
    }
}

fn glow_class(state: ToastStateType) -> &'static str {
    match state {
        ToastStateType::Success => "shadow-[0_0_8px_theme(--color-success-500/0.4)]",
        ToastStateType::Error => "shadow-[0_0_8px_theme(--color-danger-500/0.4)]",
        ToastStateType::Warning => "shadow-[0_0_8px_theme(--color-warning-500/0.4)]",
        ToastStateType::Info => "shadow-[0_0_8px_theme(--color-info-500/0.4)]",
        ToastStateType::Loading => "shadow-[0_0_8px_theme(--color-primary-400/0.4)]",
    }
}

fn emit(
    state: ToastStateType,
    title: String,
    description: Option<String>,
    duration_ms: u64,
) -> ToastHandleType {
    let id = NEXT_TOAST_ID.fetch_add(1, Ordering::Relaxed);

    let index = TOAST_STORE.read().len();
    TOAST_STORE.write().push(ToastEntry {
        id,
        state,
        title: title.clone(),
        description: description.clone(),
        duration_ms,
        open: true,
        index,
    });

    if state != ToastStateType::Loading {
        let dismiss_id = id;
        spawn(async move {
            // Wait for duration then auto-close.
            let js = format!(
                "await new Promise(r => setTimeout(r, {})); dioxus.send(true);",
                duration_ms
            );
            let mut ev = dioxus::document::eval(&js);
            ev.recv::<bool>().await.ok();
            dismiss_toast(dismiss_id);
        });
    }

    id
}

fn dismiss_toast(id: ToastHandleType) {
    // Mark closed for animation.
    {
        let mut store = TOAST_STORE.write();
        if let Some(entry) = store.iter_mut().find(|e| e.id == id) {
            entry.open = false;
        }
    }

    spawn(async move {
        let js = format!(
            "await new Promise(r => setTimeout(r, {})); dioxus.send(true);",
            UNMOUNTING_DELAY_MS
        );
        let mut ev = dioxus::document::eval(&js);
        ev.recv::<bool>().await.ok();
        {
            let mut store = TOAST_STORE.write();
            store.retain(|e| e.id != id);
            // Reindex remaining toasts.
            for (i, entry) in store.iter_mut().enumerate() {
                entry.index = i;
            }
        }
    });
}

/// Imperative toast API. Mount `<Toaster />` once near your app root, then:
///
/// ```rust,ignore
/// toaster::success("Saved", None, None);
/// let handle = toaster::loading("Uploading…", None);
/// toaster::dismiss(Some(handle));  // dismiss specific toast
/// toaster::dismiss(None);          // dismiss all
/// ```
pub mod toaster {
    use super::{
        TOAST_DURATION_MS, TOAST_STORE, ToastHandleType, ToastStateType, dismiss_toast, emit,
    };
    use dioxus::prelude::ReadableExt;

    pub fn success(
        title: &str,
        description: Option<&str>,
        duration: Option<u64>,
    ) -> ToastHandleType {
        emit(
            ToastStateType::Success,
            title.to_string(),
            description.map(str::to_string),
            duration.unwrap_or(TOAST_DURATION_MS),
        )
    }

    pub fn error(title: &str, description: Option<&str>, duration: Option<u64>) -> ToastHandleType {
        emit(
            ToastStateType::Error,
            title.to_string(),
            description.map(str::to_string),
            duration.unwrap_or(TOAST_DURATION_MS),
        )
    }

    pub fn warning(
        title: &str,
        description: Option<&str>,
        duration: Option<u64>,
    ) -> ToastHandleType {
        emit(
            ToastStateType::Warning,
            title.to_string(),
            description.map(str::to_string),
            duration.unwrap_or(TOAST_DURATION_MS),
        )
    }

    pub fn info(title: &str, description: Option<&str>, duration: Option<u64>) -> ToastHandleType {
        emit(
            ToastStateType::Info,
            title.to_string(),
            description.map(str::to_string),
            duration.unwrap_or(TOAST_DURATION_MS),
        )
    }

    pub fn loading(title: &str, description: Option<&str>) -> ToastHandleType {
        emit(
            ToastStateType::Loading,
            title.to_string(),
            description.map(str::to_string),
            u64::MAX,
        )
    }

    /// Dismiss a specific toast by handle, or all toasts when `handle` is
    /// `None`.
    pub fn dismiss(handle: Option<ToastHandleType>) {
        if let Some(id) = handle {
            dismiss_toast(id);
        } else {
            let ids: Vec<ToastHandleType> = TOAST_STORE.read().iter().map(|e| e.id).collect();
            for id in ids {
                dismiss_toast(id);
            }
        }
    }

    /// Show a loading toast that transitions to success/error when `promise`
    /// settles.
    pub async fn promise<T, F, Fut>(
        future: Fut,
        loading_title: &str,
        success_title: impl Fn(&T) -> String,
        error_title: impl Fn() -> String,
    ) -> Result<T, ()>
    where
        Fut: std::future::Future<Output = Result<T, ()>>,
    {
        let handle = loading(loading_title, None);
        match future.await {
            Ok(data) => {
                dismiss_toast(handle);
                emit(
                    ToastStateType::Success,
                    success_title(&data),
                    None,
                    TOAST_DURATION_MS,
                );
                Ok(data)
            }
            Err(_) => {
                dismiss_toast(handle);
                emit(
                    ToastStateType::Error,
                    error_title(),
                    None,
                    TOAST_DURATION_MS,
                );
                Err(())
            }
        }
    }
}

/// Toast stack mounting point. Render once near the root of your app.
///
/// ```rust,ignore
/// Toaster {}
/// ```
///
/// Toasts are emitted through the `toaster` module API.
#[component]
pub fn Toaster() -> Element {
    let store = TOAST_STORE.read();

    rsx! {
        for entry in store.iter() {
            ToastView { entry: entry.clone(), key: "{entry.id}" }
        }
    }
}

#[derive(Props, Clone, PartialEq)]
struct ToastViewProps {
    entry: ToastEntry,
}

#[component]
fn ToastView(props: ToastViewProps) -> Element {
    let entry = props.entry.clone();
    let id = entry.id;
    let state = entry.state;
    let badge = badge_class(state);
    let glow = glow_class(state);
    let top_rem = 1.0 + entry.index as f64 * 5.0;
    let mut depleted = use_signal(|| false);

    // Start the progress bar shrink on the next animation frame.
    use_effect(move || {
        if state == ToastStateType::Loading {
            return;
        }
        spawn(async move {
            let _ = dioxus::document::eval(
                "await new Promise(r => requestAnimationFrame(r)); dioxus.send(true);",
            )
            .recv::<bool>()
            .await;
            depleted.set(true);
        });
    });

    rsx! {
        div {
            "data-state": if entry.open { "open" } else { "closed" },
            class: "fixed left-1/2 z-[9999] flex -translate-x-1/2 justify-center transition-all duration-200 data-[state=closed]:-translate-y-3 data-[state=closed]:opacity-0",
            style: "top: {top_rem}rem",
            div {
                class: "relative flex w-91 items-start gap-3 overflow-hidden rounded-lg bg-linear-to-br from-primary-950 via-primary-800 to-primary-950 p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.06)]",
                div {
                    class: cn([
                        "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded text-light",
                        badge,
                        glow,
                    ]),
                    match state {
                        ToastStateType::Success => rsx! { CircleCheckIcon { class: "size-3.5 shrink-0" } },
                        ToastStateType::Error => rsx! { CircleXmarkIcon { class: "size-3.5 shrink-0" } },
                        ToastStateType::Warning => rsx! { TriangleWarningIcon { class: "size-3.5 shrink-0" } },
                        ToastStateType::Info => rsx! { CircleInfoIcon { class: "size-3.5 shrink-0" } },
                        ToastStateType::Loading => rsx! { SpinnerLoaderIcon { class: "size-3.5 shrink-0 animate-spin" } },
                    }
                }
                div {
                    class: "flex-1 min-w-0 pt-0.5",
                    p { class: "text-sm font-medium text-light", "{entry.title}" }
                    if let Some(desc) = &entry.description {
                        p { class: "mt-0.5 text-xs text-light/50", "{desc}" }
                    }
                }
                button {
                    r#type: "button",
                    class: button_variants(ButtonVariantType::Ghost, ButtonSizeType::IconXs, Some("shrink-0 mt-0.5 text-light/25 hover:text-light/70 hover:bg-light/10")),
                    onclick: move |_| dismiss_toast(id),
                    XmarkIcon { class: "size-3.5" }
                }
                if state != ToastStateType::Loading {
                    div {
                        class: "absolute bottom-0 left-0 right-0 h-1 bg-light/4",
                        div {
                            class: cn([
                                "h-full transition-[width] ease-linear",
                                if *depleted.read() { "w-0" } else { "w-full" },
                                badge,
                            ]),
                            style: "transition-duration: {entry.duration_ms}ms",
                        }
                    }
                }
            }
        }
    }
}
