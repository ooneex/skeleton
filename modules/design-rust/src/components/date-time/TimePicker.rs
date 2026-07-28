#![allow(non_snake_case)]

use std::future::Future;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::{Arc, Mutex};
use std::task::{Poll, Waker};

use dioxus::document::eval;
use dioxus::prelude::*;

use crate::components::button::Button;
use crate::components::dialog::{DialogContent, DialogHeader, DialogTitle};
use crate::components::select::{
    Select, SelectContent, SelectItem, SelectTrigger, SelectTriggerSizeType, SelectValue,
};
use crate::utils::cn;

static NEXT_TIME_PICKER_ID: AtomicUsize = AtomicUsize::new(0);

/// Properties for the imperative `pick_time` API.
///
/// # Rust differences from TypeScript
/// - `title` and `confirm_label` are `String`s instead of `ReactNode`s; the
///   dialog store has to own its content and Dioxus RSX nodes cannot be moved
///   across the async boundary.
/// - `class` replaces the `className` passed to `createDialog`; it is merged
///   over the built-in `max-w-xs` on the dialog panel.
/// - The TypeScript popups pass `alignItemWithTrigger={false}` to
///   `SelectContent`. The Rust `SelectContent` always anchors the popup to the
///   trigger rather than to the selected item, so the flag has no counterpart
///   and is dropped.
/// - The current clock time (the fallback when `value` is absent or malformed)
///   is read through the JS bridge, so it lands one frame after the first
///   render; until then the selectors show `00:00`.
#[derive(Clone, Default, PartialEq)]
pub struct TimePickerPropsType {
    /// Initially selected time, formatted `HH:MM`.
    pub value: Option<String>,
    /// Earliest selectable time, formatted `HH:MM`.
    pub min_time: Option<String>,
    /// Heading shown above the time selectors.
    pub title: Option<String>,
    /// Label of the confirm button. Defaults to `Done`.
    pub confirm_label: Option<String>,
    /// Extra classes merged onto the dialog panel.
    pub class: Option<String>,
}

/// Parses an `HH:MM` string into `(hour, minute)`. Mirrors the TypeScript
/// `/^(\d{1,2}):(\d{2})$/` guard: one or two digits for the hour, exactly two
/// for the minute.
fn parse_time(time: &str) -> Option<(u8, u8)> {
    let (hour_str, minute_str) = time.split_once(':')?;
    let hour_ok = (1..=2).contains(&hour_str.len()) && hour_str.bytes().all(|b| b.is_ascii_digit());
    let minute_ok = minute_str.len() == 2 && minute_str.bytes().all(|b| b.is_ascii_digit());
    if !hour_ok || !minute_ok {
        return None;
    }
    Some((hour_str.parse().ok()?, minute_str.parse().ok()?))
}

/// Splits a valid `HH:MM` value into its zero-padded hour and its minute,
/// matching the TypeScript `initialTime` helper. Returns `None` when the value
/// is absent or malformed, in which case the current clock time is used.
fn initial_time(value: Option<&str>) -> Option<(String, String)> {
    let value = value?;
    let (hour, minute) = parse_time(value)?;
    Some((format!("{hour:02}"), format!("{minute:02}")))
}

#[derive(Clone)]
struct TimePickerEntry {
    id: usize,
    props: TimePickerPropsType,
    open: bool,
    result_slot: Arc<Mutex<Option<Option<String>>>>,
    waker_slot: Arc<Mutex<Option<Waker>>>,
}

impl PartialEq for TimePickerEntry {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id
    }
}

static TIME_PICKER_STORE: GlobalSignal<Vec<TimePickerEntry>> = GlobalSignal::new(Vec::new);

/// Resolves the pending future, closes the panel for the exit animation, then
/// drops the entry once the animation has run.
fn resolve_time(id: usize, value: Option<String>) {
    {
        let mut store = TIME_PICKER_STORE.write();
        if let Some(entry) = store.iter_mut().find(|e| e.id == id) {
            entry.open = false;
            *entry.result_slot.lock().unwrap() = Some(value);
            if let Some(waker) = entry.waker_slot.lock().unwrap().take() {
                waker.wake();
            }
        }
    }

    spawn(async move {
        let mut ev = eval("await new Promise(r => setTimeout(r, 200)); dioxus.send(true);");
        ev.recv::<bool>().await.ok();
        TIME_PICKER_STORE.write().retain(|e| e.id != id);
    });
}

/// Await a time choice. Resolves `Some("HH:MM")` with the chosen time, or
/// `None` when the dialog is dismissed (Escape / outside click).
///
/// Mount [`TimePicker`] once near the root of your app, then call this from
/// anywhere:
///
/// ```rust,ignore
/// spawn(async move {
///     if let Some(time) = pick_time(TimePickerPropsType {
///         value: Some("09:30".to_string()),
///         min_time: Some("08:00".to_string()),
///         ..Default::default()
///     }).await {
///         reminder.set(Some(time));
///     }
/// });
/// ```
///
/// # Rust differences from TypeScript
/// This is a plain `fn` returning a future rather than an `async fn`. The
/// dialog is pushed onto the store the moment `pick_time` is called — exactly
/// like the JavaScript version, where `pickTime()` opens the dialog before the
/// promise is awaited. An `async fn` body would not run until first polled.
pub fn pick_time(props: TimePickerPropsType) -> impl Future<Output = Option<String>> + 'static {
    let id = NEXT_TIME_PICKER_ID.fetch_add(1, Ordering::Relaxed);
    let result_slot = Arc::new(Mutex::new(None::<Option<String>>));
    let waker_slot = Arc::new(Mutex::new(None::<Waker>));

    TIME_PICKER_STORE.write().push(TimePickerEntry {
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
        let resolved = result_for_poll.lock().unwrap().clone();
        match resolved {
            Some(value) => Poll::Ready(value),
            None => Poll::Pending,
        }
    })
}

/// Root mount point for imperative time pickers opened via [`pick_time`].
/// Render this once near the top of your app:
///
/// ```rust,ignore
/// TimePicker {}
/// ```
///
/// Then call `pick_time` from anywhere.
#[component]
pub fn TimePicker() -> Element {
    let store = TIME_PICKER_STORE.read();

    rsx! {
        for entry in store.iter() {
            TimePickerInstance { entry: entry.clone(), key: "{entry.id}" }
        }
    }
}

#[derive(Props, Clone, PartialEq)]
struct TimePickerInstanceProps {
    entry: TimePickerEntry,
}

#[component]
fn TimePickerInstance(props: TimePickerInstanceProps) -> Element {
    let entry = props.entry.clone();
    let id = entry.id;
    let open = entry.open;
    let picker = entry.props.clone();

    let initial = initial_time(picker.value.as_deref());
    let has_initial = initial.is_some();
    let (initial_hour, initial_minute) =
        initial.unwrap_or_else(|| ("00".to_string(), "00".to_string()));
    let mut hour = use_signal(|| initial_hour);
    let mut minute = use_signal(|| initial_minute);

    // Fall back to the current clock time when no valid `value` was supplied.
    // `new Date()` is only reachable through the JS bridge here, so the initial
    // render shows `00:00` until the evaluation resolves.
    use_future(move || async move {
        if has_initial {
            return;
        }
        let mut ev = eval("dioxus.send([new Date().getHours(), new Date().getMinutes()])");
        if let Ok(parts) = ev.recv::<Vec<i64>>().await
            && parts.len() == 2
        {
            hour.set(format!("{:02}", parts[0]));
            minute.set(format!("{:02}", parts[1]));
        }
    });

    let min_time_parsed = picker.min_time.as_deref().and_then(parse_time);
    let current_hour = hour().parse::<u8>().unwrap_or_default();

    let available_hours: Vec<String> = (0..24_u8)
        .filter(|h| min_time_parsed.is_none_or(|(min_hour, _)| *h >= min_hour))
        .map(|h| format!("{h:02}"))
        .collect();

    let available_minutes: Vec<String> = (0..60_u8)
        .filter(|m| match min_time_parsed {
            Some((min_hour, min_minute)) if current_hour == min_hour => *m > min_minute,
            _ => true,
        })
        .map(|m| format!("{m:02}"))
        .collect();

    let confirm_label = picker
        .confirm_label
        .clone()
        .unwrap_or_else(|| "Done".to_string());

    rsx! {
        DialogContent {
            open,
            show_close_button: true,
            class: cn(["max-w-xs", picker.class.as_deref().unwrap_or_default()]),
            on_dismiss: move |()| resolve_time(id, None),
            if let Some(title) = &picker.title {
                DialogHeader {
                    DialogTitle { "{title}" }
                }
            }
            div { class: "flex w-full items-center gap-2 justify-start",
                div { class: "w-16",
                    Select {
                        value: hour(),
                        on_value_change: move |value: String| {
                            if !value.is_empty() {
                                hour.set(value);
                            }
                        },
                        SelectTrigger {
                            size: SelectTriggerSizeType::Sm,
                            class: "w-full cursor-pointer",
                            SelectValue { placeholder: "HH" }
                        }
                        SelectContent { class: "max-h-64",
                            for value in available_hours.iter() {
                                SelectItem { key: "{value}", value: "{value}", "{value}" }
                            }
                        }
                    }
                }
                span { class: "px-1", ":" }
                div { class: "w-16",
                    Select {
                        value: minute(),
                        on_value_change: move |value: String| {
                            if !value.is_empty() {
                                minute.set(value);
                            }
                        },
                        SelectTrigger {
                            size: SelectTriggerSizeType::Sm,
                            class: "w-full cursor-pointer",
                            SelectValue { placeholder: "MM" }
                        }
                        SelectContent { class: "max-h-64",
                            for value in available_minutes.iter() {
                                SelectItem { key: "{value}", value: "{value}", "{value}" }
                            }
                        }
                    }
                }
            }
            Button {
                onclick: move |_| resolve_time(id, Some(format!("{}:{}", hour(), minute()))),
                class: "w-full",
                "{confirm_label}"
            }
        }
    }
}
