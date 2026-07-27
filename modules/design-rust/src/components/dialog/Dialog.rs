use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::{Arc, Mutex};
use std::task::{Poll, Waker};

use dioxus::prelude::*;

use super::DialogContent::DialogContent;
use super::DialogDescription::DialogDescription;
use super::DialogHeader::DialogHeader;
use super::DialogTitle::DialogTitle;

#[allow(dead_code)]
static NEXT_DIALOG_ID: AtomicUsize = AtomicUsize::new(0);

/// Properties accepted by the imperative `dialog_call` API.
///
/// Because Dioxus RSX nodes cannot be transferred across async boundaries,
/// `children` is limited to a string here. For dialogs with rich content use
/// `DialogContent` directly.
#[derive(Clone, Default)]
pub struct DialogPropsType {
    pub title: Option<String>,
    pub description: Option<String>,
    pub body: Option<String>,
}

#[derive(Clone)]
struct DialogEntry {
    id: usize,
    props: DialogPropsType,
    open: bool,
    result_slot: Arc<Mutex<Option<()>>>,
    waker_slot: Arc<Mutex<Option<Waker>>>,
}

impl PartialEq for DialogEntry {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id
    }
}

static DIALOG_STORE: GlobalSignal<Vec<DialogEntry>> = GlobalSignal::new(Vec::new);

/// Open a simple content dialog imperatively. Resolves when the dialog is
/// dismissed.
///
/// # Rust differences from TypeScript
/// `children` as arbitrary RSX is not supported in the global store API.
/// Use `body: Some("text")` for plain-text content. For rich content, render
/// `DialogContent` with a controlled `open` signal instead.
///
/// ```rust,ignore
/// spawn(async {
///     dialog_call(DialogPropsType {
///         title: Some("Heads up".to_string()),
///         ..Default::default()
///     }).await;
/// });
/// ```
#[allow(dead_code)]
pub async fn dialog_call(props: DialogPropsType) {
    let id = NEXT_DIALOG_ID.fetch_add(1, Ordering::Relaxed);
    let result_slot = Arc::new(Mutex::new(None::<()>));
    let waker_slot = Arc::new(Mutex::new(None::<Waker>));

    DIALOG_STORE.write().push(DialogEntry {
        id,
        props,
        open: true,
        result_slot: Arc::clone(&result_slot),
        waker_slot: Arc::clone(&waker_slot),
    });

    let result_for_poll = Arc::clone(&result_slot);
    let waker_for_poll = Arc::clone(&waker_slot);

    std::future::poll_fn(move |cx| {
        *waker_for_poll.lock().unwrap() = Some(cx.waker().clone());
        if result_for_poll.lock().unwrap().is_some() {
            Poll::Ready(())
        } else {
            Poll::Pending
        }
    })
    .await;
}

fn close_dialog(id: usize) {
    // Mark closed for the exit animation then remove after 200 ms.
    {
        let mut store = DIALOG_STORE.write();
        if let Some(entry) = store.iter_mut().find(|e| e.id == id) {
            entry.open = false;
            // Wake the caller.
            *entry.result_slot.lock().unwrap() = Some(());
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
        DIALOG_STORE.write().retain(|e| e.id != id);
    });
}

/// Root mount point for imperative dialogs opened via `dialog_call`. Render
/// this once near the top of your app, then call `dialog_call` from anywhere:
///
/// ```rust,ignore
/// // in your app root:
/// Dialog {}
///
/// // anywhere:
/// spawn(async { dialog_call(DialogPropsType { title: Some("Hi".into()), ..Default::default() }).await; });
/// ```
#[component]
pub fn Dialog() -> Element {
    let store = DIALOG_STORE.read();

    rsx! {
        for entry in store.iter() {
            DialogInstance { entry: entry.clone(), key: "{entry.id}" }
        }
    }
}

#[derive(Props, Clone, PartialEq)]
struct DialogInstanceProps {
    entry: DialogEntry,
}

#[component]
fn DialogInstance(props: DialogInstanceProps) -> Element {
    let entry = props.entry.clone();
    let id = entry.id;
    let open = entry.open;

    rsx! {
        DialogContent {
            open,
            show_close_button: true,
            on_dismiss: move |()| close_dialog(id),
            if entry.props.title.is_some() || entry.props.description.is_some() {
                DialogHeader {
                    if let Some(title) = &entry.props.title {
                        DialogTitle { "{title}" }
                    }
                    if let Some(desc) = &entry.props.description {
                        DialogDescription { "{desc}" }
                    }
                }
            }
            if let Some(body) = &entry.props.body {
                p { "{body}" }
            }
        }
    }
}
