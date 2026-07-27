use dioxus::prelude::*;

use crate::components::dialog::{DialogContent, DialogHeader, DialogTitle};
use crate::hooks::use_controlled_state;
use crate::utils::cn;

use super::statusBadgeMap::{STATUS_BADGE_MAP, StatusType, render_status_badge};

/// Props for the [`StatusPicker`] component.
///
/// # Dioxus port note
///
/// The original TypeScript implementation uses the `react-call` library to
/// provide an imperative `await pickStatus(props)` API
/// (`StatusPicker.call(props) → Promise<StatusType | null>`). Dioxus has no
/// equivalent mechanism, so this port replaces that pattern with a declarative
/// component: control visibility through `open` / `default_open` /
/// `on_open_change`, and receive the chosen status through `on_select`.
/// The `pickStatus` free function is **not available** in this port.
#[derive(Props, Clone, PartialEq)]
pub struct StatusPickerProps {
    /// Controlled open state. When set the dialog mirrors it and reports
    /// every change through `on_open_change`.
    #[props(default)]
    pub open: Option<bool>,
    /// Initial open state for uncontrolled usage.
    #[props(default)]
    pub default_open: Option<bool>,
    /// Called with the new open state whenever the dialog is opened or closed.
    pub on_open_change: Option<EventHandler<bool>>,
    /// Currently selected status — highlighted in the list.
    #[props(default)]
    pub value: Option<StatusType>,
    /// Statuses to show. Defaults to the full `STATUS_BADGE_MAP` set.
    #[props(default)]
    pub statuses: Option<Vec<StatusType>>,
    /// Heading shown above the status list.
    #[props(default)]
    pub title: Option<Element>,
    /// Called with the chosen status when the user selects one.
    pub on_select: Option<EventHandler<StatusType>>,
}

/// Declarative status picker dialog.
///
/// Mount once and control via `open` / `on_select`:
///
/// ```rust,ignore
/// StatusPicker {
///     open: is_open,
///     on_open_change: move |v| is_open.set(v),
///     value: current_status,
///     on_select: move |status| { /* apply status */ },
/// }
/// ```
///
/// **Dependency**: uses `crate::components::dialog::{DialogContent, DialogHeader, DialogTitle}`
/// which is ported by a separate agent. This file will not compile until that
/// module is available.
#[component]
pub fn StatusPicker(props: StatusPickerProps) -> Element {
    let (open, set_open) = use_controlled_state(
        props.open,
        props.default_open.unwrap_or(false),
        props.on_open_change,
    );

    let is_open = *open.read();
    let selected = props.value;
    let on_select = props.on_select;

    let items: Vec<StatusType> = match props.statuses {
        Some(ref filter) => STATUS_BADGE_MAP
            .iter()
            .filter(|e| filter.contains(&e.status))
            .map(|e| e.status)
            .collect(),
        None => STATUS_BADGE_MAP.iter().map(|e| e.status).collect(),
    };

    rsx! {
        DialogContent {
            open: is_open,
            class: "max-w-xs",
            on_dismiss: move |_| set_open.call(false),
            if let Some(title) = props.title {
                DialogHeader {
                    DialogTitle { {title} }
                }
            }
            div {
                class: "flex max-h-72 flex-col gap-1 overflow-y-auto",
                for status in items {
                    button {
                        key: "{status.as_str()}",
                        r#type: "button",
                        onclick: move |_| {
                            if let Some(on_select) = on_select {
                                on_select.call(status);
                            }
                            set_open.call(false);
                        },
                        class: cn([
                            "flex items-center rounded px-2 py-1.5 text-left cursor-pointer transition-colors",
                            "hover:bg-accent hover:text-accent-foreground",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            if selected == Some(status) { "bg-accent text-accent-foreground" } else { "" },
                        ]),
                        {render_status_badge(status)}
                    }
                }
            }
        }
    }
}
