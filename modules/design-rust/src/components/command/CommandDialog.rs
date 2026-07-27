#![allow(non_snake_case)]

use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::{Arc, Mutex};
use std::task::{Poll, Waker};

use dioxus::prelude::*;

use super::Command::Command;
use super::CommandEmpty::CommandEmpty;
use super::CommandGroup::CommandGroup;
use super::CommandInput::CommandInput;
use super::CommandItem::CommandItem;
use super::CommandList::CommandList;
use super::CommandShortcut::CommandShortcut;
use crate::components::dialog::DialogContent::DialogContent;
use crate::components::dialog::DialogDescription::DialogDescription;
use crate::components::dialog::DialogTitle::DialogTitle;
use crate::utils::cn;

static NEXT_PALETTE_ID: AtomicUsize = AtomicUsize::new(0);

/// One entry of the command palette.
///
/// # Rust differences from TypeScript
/// `label` is a `String` rather than arbitrary markup: palette items are
/// stored in a global store and travel across an `await`, which RSX nodes
/// cannot do reliably. `icon` stays an `Element` and must be built inside a
/// component, exactly like the props of any other Dioxus component.
#[derive(Clone, Default)]
pub struct CommandPaletteItemType {
    /// Value returned by `command_palette_call` when this entry is chosen.
    pub value: String,
    pub label: String,
    /// Optional heading to bucket items under.
    pub group: Option<String>,
    pub shortcut: Option<String>,
    pub icon: Option<Element>,
    /// Extra search terms beyond the visible label.
    pub keywords: Vec<String>,
    pub disabled: bool,
}

/// Properties of an imperatively opened command palette.
#[derive(Clone, Default)]
pub struct CommandPalettePropsType {
    pub items: Vec<CommandPaletteItemType>,
    pub placeholder: Option<String>,
    pub empty_message: Option<String>,
    pub class: Option<String>,
    /// Screen-reader-only dialog title/description.
    pub title: Option<String>,
    pub description: Option<String>,
}

#[derive(Clone)]
struct CommandPaletteEntry {
    id: usize,
    props: CommandPalettePropsType,
    open: bool,
    result_slot: Arc<Mutex<Option<Option<String>>>>,
    waker_slot: Arc<Mutex<Option<Waker>>>,
}

impl PartialEq for CommandPaletteEntry {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id && self.open == other.open
    }
}

static COMMAND_PALETTE_STORE: GlobalSignal<Vec<CommandPaletteEntry>> = GlobalSignal::new(Vec::new);

/// Buckets items by their `group`, keeping both the group order and the item
/// order of the input list.
fn group_items(
    items: &[CommandPaletteItemType],
) -> Vec<(Option<String>, Vec<CommandPaletteItemType>)> {
    let mut groups: Vec<(Option<String>, Vec<CommandPaletteItemType>)> = Vec::new();

    for item in items {
        let key = item.group.clone();

        match groups.iter_mut().find(|(group, _)| *group == key) {
            Some((_, bucket)) => bucket.push(item.clone()),
            None => groups.push((key, vec![item.clone()])),
        }
    }

    groups
}

fn resolve_palette(id: usize, value: Option<String>) {
    {
        let mut store = COMMAND_PALETTE_STORE.write();

        if let Some(entry) = store.iter_mut().find(|entry| entry.id == id) {
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
        COMMAND_PALETTE_STORE.write().retain(|entry| entry.id != id);
    });
}

/// Await the user's pick from a command palette. Resolves the chosen item's
/// value, or `None` when the palette is dismissed.
///
/// Mount `CommandPalette {}` once near the root of your app, then:
///
/// ```rust,ignore
/// spawn(async move {
///     let action = command_palette_call(CommandPalettePropsType {
///         items: vec![
///             CommandPaletteItemType {
///                 value: "new".to_string(),
///                 label: "New file".to_string(),
///                 group: Some("Actions".to_string()),
///                 shortcut: Some("⌘N".to_string()),
///                 ..Default::default()
///             },
///         ],
///         ..Default::default()
///     })
///     .await;
///
///     if let Some(action) = action {
///         run(action);
///     }
/// });
/// ```
pub async fn command_palette_call(props: CommandPalettePropsType) -> Option<String> {
    let id = NEXT_PALETTE_ID.fetch_add(1, Ordering::Relaxed);
    let result_slot = Arc::new(Mutex::new(None::<Option<String>>));
    let waker_slot = Arc::new(Mutex::new(None::<Waker>));

    COMMAND_PALETTE_STORE.write().push(CommandPaletteEntry {
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

        let result = result_for_poll.lock().unwrap().clone();

        match result {
            Some(value) => Poll::Ready(value),
            None => Poll::Pending,
        }
    })
    .await
}

/// Root mount point for imperative command palettes. Render this once near the
/// top of your app, then call `command_palette_call` from anywhere:
///
/// ```rust,ignore
/// CommandPalette {}
/// ```
///
/// # Rust differences from TypeScript
/// The TypeScript palette is built with `createDialog` from `react-call`,
/// which returns a component carrying a `.call()` method. Rust has no
/// equivalent, so the port follows the `alert` / `confirm` precedent of the
/// dialog folder: a mount component plus a free async function.
#[component]
pub fn CommandPalette() -> Element {
    let store = COMMAND_PALETTE_STORE.read();

    rsx! {
        for entry in store.iter() {
            CommandPaletteInstance { entry: entry.clone(), key: "{entry.id}" }
        }
    }
}

#[derive(Props, Clone, PartialEq)]
struct CommandPaletteInstanceProps {
    entry: CommandPaletteEntry,
}

#[component]
fn CommandPaletteInstance(props: CommandPaletteInstanceProps) -> Element {
    let entry = props.entry.clone();
    let id = entry.id;
    let placeholder = entry
        .props
        .placeholder
        .clone()
        .unwrap_or_else(|| "Type a command or search…".to_string());
    let empty_message = entry
        .props
        .empty_message
        .clone()
        .unwrap_or_else(|| "No results found.".to_string());

    rsx! {
        DialogContent {
            open: entry.open,
            show_close_button: false,
            class: "rounded-xl! top-12 translate-y-0 overflow-hidden p-0 shadow-2xl border-none ring-0",
            on_dismiss: move |()| resolve_palette(id, None),
            if let Some(title) = entry.props.title.as_deref() {
                DialogTitle { class: "sr-only", "{title}" }
            }
            if let Some(description) = entry.props.description.as_deref() {
                DialogDescription { class: "sr-only", "{description}" }
            }
            Command {
                class: cn([
                    "**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5",
                    entry.props.class.as_deref().unwrap_or_default(),
                ]),
                on_escape: move |()| resolve_palette(id, None),
                CommandInput { placeholder, autofocus: true }
                CommandList {
                    CommandEmpty { "{empty_message}" }
                    for (group , items) in group_items(&entry.props.items) {
                        CommandGroup { key: "{group.clone().unwrap_or_default()}", heading: group,
                            for item in items {
                                CommandItem {
                                    key: "{item.value}",
                                    value: item.value.clone(),
                                    keywords: {
                                        let mut keywords = vec![item.label.clone()];
                                        keywords.extend(item.keywords.clone());
                                        keywords
                                    },
                                    disabled: item.disabled,
                                    on_select: move |value: String| resolve_palette(id, Some(value)),
                                    if let Some(icon) = item.icon.clone() {
                                        {icon}
                                    }
                                    span { "{item.label}" }
                                    if let Some(shortcut) = item.shortcut.as_deref() {
                                        CommandShortcut { "{shortcut}" }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
