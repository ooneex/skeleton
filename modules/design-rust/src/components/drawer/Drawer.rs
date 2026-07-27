use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::{Arc, Mutex};
use std::task::{Poll, Waker};

use dioxus::prelude::*;

use super::DrawerContent::DrawerContent;
use super::DrawerDescription::DrawerDescription;
use super::DrawerFooter::DrawerFooter;
use super::DrawerHeader::DrawerHeader;
use super::DrawerTitle::DrawerTitle;

pub(crate) static NEXT_DRAWER_ID: AtomicUsize = AtomicUsize::new(0);
pub(crate) const UNMOUNTING_DELAY_MS: u64 = 300;

/// Options for `create_drawer`.
#[derive(Clone, Default)]
pub struct CreateDrawerOptionsType {
    pub class: Option<String>,
    pub side: Option<String>,
    pub dismissible: Option<bool>,
    pub modal: Option<bool>,
}

/// Properties for the basic `Drawer` call.
#[derive(Clone, Default)]
pub struct DrawerPropsType {
    pub title: Option<String>,
    pub description: Option<String>,
    pub body: Option<String>,
    pub class: Option<String>,
    pub side: Option<String>,
    pub dismissible: Option<bool>,
    pub modal: Option<bool>,
}

#[derive(Clone)]
pub(crate) struct DrawerEntry {
    pub(crate) id: usize,
    pub(crate) props: DrawerPropsType,
    pub(crate) open: bool,
    pub(crate) result_slot: Arc<Mutex<Option<()>>>,
    pub(crate) waker_slot: Arc<Mutex<Option<Waker>>>,
}

impl PartialEq for DrawerEntry {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id
    }
}

pub(crate) static DRAWER_STORE: GlobalSignal<Vec<DrawerEntry>> = GlobalSignal::new(Vec::new);

pub(crate) fn resolve_drawer(id: usize) {
    let waker = {
        let mut store = DRAWER_STORE.write();
        let entry = store.iter_mut().find(|entry| entry.id == id);
        if let Some(entry) = entry {
            entry.open = false;
            *entry.result_slot.lock().unwrap() = Some(());
            entry.waker_slot.lock().unwrap().take()
        } else {
            None
        }
    };

    if let Some(waker) = waker {
        waker.wake();
    }

    spawn(async move {
        let mut event_stream = dioxus::document::eval(&format!(
            "await new Promise(r => setTimeout(r, {UNMOUNTING_DELAY_MS})); dioxus.send(true);"
        ));
        event_stream.recv::<bool>().await.ok();
        DRAWER_STORE.write().retain(|entry| entry.id != id);
    });
}

/// Open a drawer imperatively. Resolves when the drawer is dismissed.
pub async fn drawer_call(props: DrawerPropsType) {
    let id = NEXT_DRAWER_ID.fetch_add(1, Ordering::Relaxed);
    let result_slot = Arc::new(Mutex::new(None::<()>));
    let waker_slot = Arc::new(Mutex::new(None::<Waker>));

    DRAWER_STORE.write().push(DrawerEntry {
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

/// Build a configured drawer factory. Returns a closure that opens a drawer
/// with the baked-in options merged with per-call props.
pub fn create_drawer(
    options: CreateDrawerOptionsType,
) -> impl Fn(DrawerPropsType) -> std::pin::Pin<Box<dyn std::future::Future<Output = ()> + 'static>>
{
    move |mut props: DrawerPropsType| {
        if props.class.is_none() {
            props.class = options.class.clone();
        }
        if props.side.is_none() {
            props.side = options.side.clone();
        }
        if props.dismissible.is_none() {
            props.dismissible = options.dismissible;
        }
        if props.modal.is_none() {
            props.modal = options.modal;
        }
        Box::pin(drawer_call(props))
    }
}

/// Root mount point for imperative drawers. Render this once near the app root.
#[component]
pub fn Drawer() -> Element {
    use dioxus::prelude::ReadableExt;

    let store = DRAWER_STORE.read();

    rsx! {
        for entry in store.iter() {
            DrawerInstance { entry: entry.clone(), key: "{entry.id}" }
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub(crate) struct DrawerInstanceProps {
    pub(crate) entry: DrawerEntry,
}

#[component]
pub(crate) fn DrawerInstance(props: DrawerInstanceProps) -> Element {
    let entry = props.entry.clone();
    let id = entry.id;
    let side = entry
        .props
        .side
        .clone()
        .unwrap_or_else(|| "bottom".to_string());
    let open = entry.open;
    let dismissible = entry.props.dismissible.unwrap_or(true);
    let modal = entry.props.modal.unwrap_or(true);

    rsx! {
        DrawerContent {
            open,
            side,
            dismissible,
            modal,
            class: entry.props.class.clone(),
            on_dismiss: move |()| resolve_drawer(id),
            if let Some(title) = &entry.props.title {
                if let Some(description) = &entry.props.description {
                    DrawerHeader {
                        DrawerTitle { "{title}" }
                        DrawerDescription { "{description}" }
                    }
                } else {
                    DrawerHeader {
                        DrawerTitle { "{title}" }
                    }
                }
            }
            if let Some(body) = &entry.props.body {
                p { class: "px-4 py-2 text-sm", "{body}" }
            }
            DrawerFooter { class: Some("sr-only".to_string()) }
        }
    }
}
