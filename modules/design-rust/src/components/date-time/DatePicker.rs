#![allow(non_snake_case)]

use std::future::Future;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::{Arc, Mutex};
use std::task::{Poll, Waker};

use dioxus::prelude::*;

use crate::components::calendar::Calendar;
use crate::components::dialog::{DialogContent, DialogHeader, DialogTitle};
use crate::utils::cn;

static NEXT_DATE_PICKER_ID: AtomicUsize = AtomicUsize::new(0);

/// A calendar date as `(year, month, day)`, with `month` 1-indexed.
///
/// # Rust differences from TypeScript
/// The TypeScript picker resolves a JavaScript `Date`. This crate has no
/// date/time dependency, so it reuses the plain tuple representation already
/// used by `Calendar` for `selected`, `default_month` and `on_select`.
pub type DatePickerDateType = (i32, u8, u8);

/// Properties for the imperative `pick_date` API.
///
/// # Rust differences from TypeScript
/// - `title` is a `String` instead of a `ReactNode`; the dialog store has to
///   own its content and Dioxus RSX nodes cannot be moved across the async
///   boundary.
/// - The TypeScript `calendarProps` bag (`Omit<CalendarPropsType, "mode" |
///   "selected" | "onSelect">`) is flattened into the individual calendar
///   fields below, since Rust has no structural `Omit`.
/// - `class` replaces the `className` passed to `createDialog`; it is merged
///   over the built-in `max-w-fit` on the dialog panel.
#[derive(Clone, Default, PartialEq)]
pub struct DatePickerPropsType {
    /// Initially selected date.
    pub value: Option<DatePickerDateType>,
    /// Month shown when the dialog opens, as `(year, month)`.
    pub default_month: Option<(i32, u8)>,
    /// Dates that are not selectable.
    pub disabled_days: Vec<DatePickerDateType>,
    /// Show days from adjacent months in the grid. Defaults to `true`.
    pub show_outside_days: Option<bool>,
    /// Stretch the calendar to the dialog width. Defaults to `true`.
    pub full_width: Option<bool>,
    /// Heading shown above the calendar.
    pub title: Option<String>,
    /// Extra classes merged onto the dialog panel.
    pub class: Option<String>,
}

#[derive(Clone)]
struct DatePickerEntry {
    id: usize,
    props: DatePickerPropsType,
    open: bool,
    result_slot: Arc<Mutex<Option<Option<DatePickerDateType>>>>,
    waker_slot: Arc<Mutex<Option<Waker>>>,
}

impl PartialEq for DatePickerEntry {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id
    }
}

static DATE_PICKER_STORE: GlobalSignal<Vec<DatePickerEntry>> = GlobalSignal::new(Vec::new);

/// Resolves the pending future, closes the panel for the exit animation, then
/// drops the entry once the animation has run.
fn resolve_date(id: usize, value: Option<DatePickerDateType>) {
    {
        let mut store = DATE_PICKER_STORE.write();
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
        DATE_PICKER_STORE.write().retain(|e| e.id != id);
    });
}

/// Await a date choice. Resolves `Some((year, month, day))` with the chosen
/// date, or `None` when the dialog is dismissed (Escape / outside click).
///
/// Mount [`DatePicker`] once near the root of your app, then call this from
/// anywhere:
///
/// ```rust,ignore
/// spawn(async move {
///     if let Some(date) = pick_date(DatePickerPropsType {
///         value: Some((2026, 7, 27)),
///         title: Some("Due date".to_string()),
///         ..Default::default()
///     }).await {
///         due_date.set(Some(date));
///     }
/// });
/// ```
///
/// # Rust differences from TypeScript
/// This is a plain `fn` returning a future rather than an `async fn`. The
/// dialog is pushed onto the store the moment `pick_date` is called — exactly
/// like the JavaScript version, where `pickDate()` opens the dialog before the
/// promise is awaited. An `async fn` body would not run until first polled.
pub fn pick_date(
    props: DatePickerPropsType,
) -> impl Future<Output = Option<DatePickerDateType>> + 'static {
    let id = NEXT_DATE_PICKER_ID.fetch_add(1, Ordering::Relaxed);
    let result_slot = Arc::new(Mutex::new(None::<Option<DatePickerDateType>>));
    let waker_slot = Arc::new(Mutex::new(None::<Waker>));

    DATE_PICKER_STORE.write().push(DatePickerEntry {
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
        if let Some(r) = *result_for_poll.lock().unwrap() {
            Poll::Ready(r)
        } else {
            Poll::Pending
        }
    })
}

/// Root mount point for imperative date pickers opened via [`pick_date`].
/// Render this once near the top of your app:
///
/// ```rust,ignore
/// DatePicker {}
/// ```
///
/// Then call `pick_date` from anywhere.
#[component]
pub fn DatePicker() -> Element {
    let store = DATE_PICKER_STORE.read();

    rsx! {
        for entry in store.iter() {
            DatePickerInstance { entry: entry.clone(), key: "{entry.id}" }
        }
    }
}

#[derive(Props, Clone, PartialEq)]
struct DatePickerInstanceProps {
    entry: DatePickerEntry,
}

#[component]
fn DatePickerInstance(props: DatePickerInstanceProps) -> Element {
    let entry = props.entry.clone();
    let id = entry.id;
    let open = entry.open;
    let picker = entry.props.clone();

    rsx! {
        DialogContent {
            open,
            show_close_button: true,
            class: cn(["max-w-fit", picker.class.as_deref().unwrap_or_default()]),
            on_dismiss: move |()| resolve_date(id, None),
            if let Some(title) = &picker.title {
                DialogHeader {
                    DialogTitle { "{title}" }
                }
            }
            Calendar {
                full_width: picker.full_width.unwrap_or(true),
                selected: picker.value,
                default_month: picker.default_month,
                disabled_days: picker.disabled_days.clone(),
                show_outside_days: picker.show_outside_days.unwrap_or(true),
                on_select: move |date| resolve_date(id, Some(date)),
            }
        }
    }
}
