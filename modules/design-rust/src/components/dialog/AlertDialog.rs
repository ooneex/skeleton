use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::{Arc, Mutex};
use std::task::{Poll, Waker};

use dioxus::prelude::*;

use crate::components::button::ButtonVariantType;

use super::AlertDialogAction::AlertDialogAction;
use super::AlertDialogCancel::AlertDialogCancel;
use super::AlertDialogContent::{AlertDialogContent, AlertDialogSizeType};
use super::AlertDialogDescription::AlertDialogDescription;
use super::AlertDialogFooter::AlertDialogFooter;
use super::AlertDialogHeader::AlertDialogHeader;
use super::AlertDialogTitle::AlertDialogTitle;

static NEXT_ALERT_ID: AtomicUsize = AtomicUsize::new(0);

/// `confirm` shows Cancel + Action; `alert` shows a single acknowledge button.
#[derive(Clone, Copy, PartialEq, Eq)]
pub enum AlertDialogModeType {
    Confirm,
    Alert,
}

/// Properties for the imperative `confirm` / `alert` API.
#[derive(Clone)]
pub struct AlertDialogPropsType {
    /// `Confirm` (default) shows Cancel + Action; `Alert` shows a single
    /// acknowledge button.
    pub mode: Option<AlertDialogModeType>,
    pub title: String,
    pub description: Option<String>,
    pub confirm_label: Option<String>,
    pub cancel_label: Option<String>,
    pub confirm_variant: Option<ButtonVariantType>,
    pub size: Option<AlertDialogSizeType>,
}

#[derive(Clone)]
struct AlertDialogEntry {
    id: usize,
    mode: AlertDialogModeType,
    title: String,
    description: Option<String>,
    confirm_label: String,
    cancel_label: String,
    confirm_variant: ButtonVariantType,
    size: AlertDialogSizeType,
    open: bool,
    result_slot: Arc<Mutex<Option<bool>>>,
    waker_slot: Arc<Mutex<Option<Waker>>>,
}

impl PartialEq for AlertDialogEntry {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id
    }
}

static ALERT_DIALOG_STORE: GlobalSignal<Vec<AlertDialogEntry>> = GlobalSignal::new(Vec::new);

fn resolve_alert(id: usize, value: bool) {
    {
        let mut store = ALERT_DIALOG_STORE.write();
        if let Some(entry) = store.iter_mut().find(|e| e.id == id) {
            entry.open = false;
            *entry.result_slot.lock().unwrap() = Some(value);
            if let Some(waker) = entry.waker_slot.lock().unwrap().take() {
                waker.wake();
            }
        }
    }

    spawn(async move {
        let mut ev = dioxus::document::eval(
            "await new Promise(r => setTimeout(r, 200)); dioxus.send(true);",
        );
        ev.recv::<bool>().await.ok();
        ALERT_DIALOG_STORE.write().retain(|e| e.id != id);
    });
}

/// Await a yes/no decision. Resolves `true` on confirm, `false` on
/// cancel/dismiss.
///
/// Mount `<AlertDialog />` once near the root of your app, then:
///
/// ```rust,ignore
/// spawn(async move {
///     if confirm(AlertDialogPropsType {
///         title: "Delete item?".to_string(),
///         description: Some("This can't be undone.".to_string()),
///         ..Default::default()
///     }).await {
///         api.delete(id).await;
///     }
/// });
/// ```
pub async fn confirm(props: AlertDialogPropsType) -> bool {
    let id = NEXT_ALERT_ID.fetch_add(1, Ordering::Relaxed);
    let result_slot = Arc::new(Mutex::new(None::<bool>));
    let waker_slot = Arc::new(Mutex::new(None::<Waker>));

    ALERT_DIALOG_STORE.write().push(AlertDialogEntry {
        id,
        mode: props.mode.unwrap_or(AlertDialogModeType::Confirm),
        title: props.title,
        description: props.description,
        confirm_label: props.confirm_label.unwrap_or_else(|| "Confirm".to_string()),
        cancel_label: props.cancel_label.unwrap_or_else(|| "Cancel".to_string()),
        confirm_variant: props.confirm_variant.unwrap_or_default(),
        size: props.size.unwrap_or_default(),
        open: true,
        result_slot: Arc::clone(&result_slot),
        waker_slot: Arc::clone(&waker_slot),
    });

    let result_for_poll = Arc::clone(&result_slot);
    let waker_for_poll = Arc::clone(&waker_slot);

    std::future::poll_fn(move |cx| {
        *waker_for_poll.lock().unwrap() = Some(cx.waker().clone());
        if let Some(r) = *result_for_poll.lock().unwrap() {
            Poll::Ready(r)
        } else {
            Poll::Pending
        }
    })
    .await
}

/// Await acknowledgement of a message. Resolves `true` on acknowledge, `false`
/// on dismiss.
pub async fn alert(props: AlertDialogPropsType) -> bool {
    confirm(AlertDialogPropsType {
        mode: Some(AlertDialogModeType::Alert),
        confirm_label: Some(props.confirm_label.unwrap_or_else(|| "OK".to_string())),
        ..props
    })
    .await
}

/// Root mount point for imperative alert/confirm dialogs. Render this once
/// near the top of your app:
///
/// ```rust,ignore
/// AlertDialog {}
/// ```
///
/// Then call `confirm` or `alert` from anywhere.
#[component]
pub fn AlertDialog() -> Element {
    let store = ALERT_DIALOG_STORE.read();

    rsx! {
        for entry in store.iter() {
            AlertDialogInstance { entry: entry.clone(), key: "{entry.id}" }
        }
    }
}

#[derive(Props, Clone, PartialEq)]
struct AlertDialogInstanceProps {
    entry: AlertDialogEntry,
}

#[component]
fn AlertDialogInstance(props: AlertDialogInstanceProps) -> Element {
    let entry = props.entry.clone();
    let id = entry.id;
    let open = entry.open;

    rsx! {
        AlertDialogContent {
            open,
            size: entry.size,
            on_dismiss: move |()| resolve_alert(id, false),
            AlertDialogHeader {
                AlertDialogTitle { "{entry.title}" }
                if let Some(desc) = &entry.description {
                    AlertDialogDescription { "{desc}" }
                }
            }
            AlertDialogFooter {
                if entry.mode == AlertDialogModeType::Confirm {
                    AlertDialogCancel {
                        onclick: move |_| resolve_alert(id, false),
                        "{entry.cancel_label}"
                    }
                }
                AlertDialogAction {
                    variant: entry.confirm_variant,
                    onclick: move |_| resolve_alert(id, true),
                    "{entry.confirm_label}"
                }
            }
        }
    }
}

impl Default for AlertDialogPropsType {
    fn default() -> Self {
        Self {
            mode: None,
            title: String::new(),
            description: None,
            confirm_label: None,
            cancel_label: None,
            confirm_variant: None,
            size: None,
        }
    }
}
