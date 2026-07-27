use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::{Arc, Mutex};
use std::task::{Poll, Waker};

use dioxus::prelude::*;

use super::SheetContent::{SheetContent, SheetSideType};
use super::SheetDescription::SheetDescription;
use super::SheetHeader::SheetHeader;
use super::SheetTitle::SheetTitle;

static NEXT_SHEET_ID: AtomicUsize = AtomicUsize::new(0);

/// Options for `create_sheet`.
#[derive(Clone)]
pub struct CreateSheetOptionsType {
    pub class: Option<String>,
    /// Edge the sheet slides in from. Defaults to `Right`.
    pub side: Option<SheetSideType>,
    pub show_close_button: bool,
    /// `true` (default) locks scroll and blocks the page.
    pub modal: bool,
    pub disable_pointer_dismissal: bool,
}

impl Default for CreateSheetOptionsType {
    fn default() -> Self {
        Self {
            class: None,
            side: None,
            show_close_button: true,
            modal: true,
            disable_pointer_dismissal: false,
        }
    }
}

/// Properties for the basic `Sheet` callable.
#[derive(Clone, Default)]
pub struct SheetPropsType {
    pub title: Option<String>,
    pub description: Option<String>,
    pub side: Option<SheetSideType>,
    /// Plain text body rendered inside the sheet.
    pub body: Option<String>,
}

#[derive(Clone)]
struct SheetEntry {
    id: usize,
    title: Option<String>,
    description: Option<String>,
    body: Option<String>,
    side: SheetSideType,
    show_close_button: bool,
    class: Option<String>,
    open: bool,
    result_slot: Arc<Mutex<Option<()>>>,
    waker_slot: Arc<Mutex<Option<Waker>>>,
}

impl PartialEq for SheetEntry {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id
    }
}

static SHEET_STORE: GlobalSignal<Vec<SheetEntry>> = GlobalSignal::new(Vec::new);

fn close_sheet(id: usize) {
    {
        let mut store = SHEET_STORE.write();
        if let Some(entry) = store.iter_mut().find(|e| e.id == id) {
            entry.open = false;
            *entry.result_slot.lock().unwrap() = Some(());
            if let Some(waker) = entry.waker_slot.lock().unwrap().take() {
                waker.wake();
            }
        }
    }

    spawn(async move {
        let mut ev = dioxus::document::eval(
            "await new Promise(r => setTimeout(r, 300)); dioxus.send(true);",
        );
        ev.recv::<bool>().await.ok();
        SHEET_STORE.write().retain(|e| e.id != id);
    });
}

#[allow(dead_code)]
async fn open_sheet_entry(entry: SheetEntry) {
    let result_for_poll = Arc::clone(&entry.result_slot);
    let waker_for_poll = Arc::clone(&entry.waker_slot);

    SHEET_STORE.write().push(entry);

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

/// Factory that builds a typed, imperatively-callable sheet.
///
/// # Rust differences from TypeScript
/// The `render` closure receives the props and returns a `String` body (rich
/// RSX children are not transportable across async boundaries). For rich
/// content, use `SheetContent` directly with a controlled `open` signal.
///
/// ```rust,ignore
/// let edit_sheet = create_sheet(
///     |props: &str| props.to_string(),
///     CreateSheetOptionsType { side: Some(SheetSideType::Right), ..Default::default() },
/// );
/// spawn(async move { sheet_call(SheetPropsType { title: Some("Edit".into()), ..Default::default() }).await; });
/// ```
pub fn create_sheet(
    render: impl Fn(&SheetPropsType) -> Option<String> + 'static,
    options: CreateSheetOptionsType,
) -> impl Fn(SheetPropsType) -> std::pin::Pin<Box<dyn std::future::Future<Output = ()> + 'static>> {
    let options = Arc::new(options);
    let render = Arc::new(render);

    move |props: SheetPropsType| {
        let id = NEXT_SHEET_ID.fetch_add(1, Ordering::Relaxed);
        let result_slot = Arc::new(Mutex::new(None::<()>));
        let waker_slot = Arc::new(Mutex::new(None::<Waker>));
        let body = render(&props);
        let entry = SheetEntry {
            id,
            title: props.title,
            description: props.description,
            body,
            side: options.side.unwrap_or_default(),
            show_close_button: options.show_close_button,
            class: options.class.clone(),
            open: true,
            result_slot: Arc::clone(&result_slot),
            waker_slot: Arc::clone(&waker_slot),
        };

        let result_for_poll = Arc::clone(&result_slot);
        let waker_for_poll = Arc::clone(&waker_slot);

        SHEET_STORE.write().push(entry);

        Box::pin(std::future::poll_fn(move |cx| {
            *waker_for_poll.lock().unwrap() = Some(cx.waker().clone());
            if result_for_poll.lock().unwrap().is_some() {
                Poll::Ready(())
            } else {
                Poll::Pending
            }
        }))
    }
}

/// Root mount point for the basic `sheet_call` API. Render once near the root,
/// then call `sheet_call` from anywhere.
#[component]
pub fn Sheet() -> Element {
    let store = SHEET_STORE.read();

    rsx! {
        for entry in store.iter() {
            SheetInstance { entry: entry.clone(), key: "{entry.id}" }
        }
    }
}

#[derive(Props, Clone, PartialEq)]
struct SheetInstanceProps {
    entry: SheetEntry,
}

#[component]
fn SheetInstance(props: SheetInstanceProps) -> Element {
    let entry = props.entry.clone();
    let id = entry.id;
    let open = entry.open;

    rsx! {
        SheetContent {
            open,
            side: entry.side,
            show_close_button: entry.show_close_button,
            class: entry.class.clone(),
            on_dismiss: move |()| close_sheet(id),
            if entry.title.is_some() || entry.description.is_some() {
                SheetHeader {
                    if let Some(t) = &entry.title {
                        SheetTitle { "{t}" }
                    }
                    if let Some(d) = &entry.description {
                        SheetDescription { "{d}" }
                    }
                }
            }
            if let Some(body) = &entry.body {
                p { "{body}" }
            }
        }
    }
}
