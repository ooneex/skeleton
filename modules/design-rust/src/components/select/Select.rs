use dioxus::prelude::*;

use crate::hooks::use_id;

/// A registered item entry used for keyboard navigation, typeahead, and label
/// display in `SelectValue`.
#[derive(Clone)]
pub(crate) struct SelectItemHandle {
    pub(crate) value: String,
    pub(crate) label: String,
    pub(crate) disabled: bool,
}

/// Shared context threaded through all select sub-components.
#[derive(Clone)]
pub(crate) struct SelectContext {
    pub(crate) value: Signal<Option<String>>,
    pub(crate) set_value: Callback<String>,
    pub(crate) open: Signal<bool>,
    pub(crate) set_open: Callback<bool>,
    /// Stable DOM id for the trigger button; wires `aria-controls`.
    pub(crate) trigger_id: String,
    /// Stable DOM id for the floating positioner; positioned by `use_anchor_position`.
    pub(crate) positioner_id: String,
    /// Stable DOM id for the scrollable viewport inside `SelectContent`.
    pub(crate) viewport_id: String,
    pub(crate) disabled: Signal<bool>,
    pub(crate) items: Signal<Vec<SelectItemHandle>>,
    /// The item currently highlighted by keyboard navigation.
    pub(crate) focused_value: Signal<Option<String>>,
    pub(crate) focus_next: Callback<()>,
    pub(crate) focus_prev: Callback<()>,
    pub(crate) focus_first: Callback<()>,
    pub(crate) focus_last: Callback<()>,
    pub(crate) focus_by_char: Callback<char>,
    pub(crate) confirm_focused: Callback<()>,
}

impl SelectContext {
    /// Adds or replaces an item entry in the registry.
    pub(crate) fn register_item(&mut self, value: String, label: String, disabled: bool) {
        let mut items = self.items.write();
        items.retain(|item| item.value != value);
        items.push(SelectItemHandle {
            value,
            label,
            disabled,
        });
    }

    pub(crate) fn unregister_item(&mut self, value: &str) {
        self.items.write().retain(|item| item.value != value);
    }

    /// Returns the display label for the currently selected value, if known.
    pub(crate) fn selected_label(&self) -> Option<String> {
        let v = self.value.read().clone();
        let items = self.items.read();
        v.as_ref().and_then(|val| {
            items
                .iter()
                .find(|item| item.value == *val)
                .map(|item| item.label.clone())
        })
    }

    pub(crate) fn is_selected(&self, value: &str) -> bool {
        self.value.read().as_deref() == Some(value)
    }

    pub(crate) fn is_focused(&self, value: &str) -> bool {
        self.focused_value.read().as_deref() == Some(value)
    }

    pub(crate) fn is_disabled(&self) -> bool {
        *self.disabled.read()
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct SelectProps {
    /// Controlled selected value.
    #[props(default)]
    pub value: Option<String>,
    /// Initial selected value when uncontrolled.
    #[props(default)]
    pub default_value: Option<String>,
    /// Called whenever the selection changes.
    pub on_value_change: Option<EventHandler<String>>,
    #[props(default = false)]
    pub disabled: bool,
    pub children: Element,
}

/// Root of the select compound component. Provides shared state and navigation
/// callbacks via context to all sub-components.
///
/// ```rust,ignore
/// rsx! {
///     Select { default_value: "en", on_value_change: move |v| lang.set(v),
///         Select.Trigger { Select.Value { placeholder: "Pick a language" } }
///         Select.Content {
///             Select.Item { value: "en", label: "English", "English" }
///             Select.Item { value: "fr", label: "Français", "Français" }
///         }
///     }
/// }
/// ```
#[component]
pub fn Select(props: SelectProps) -> Element {
    let mut internal_value =
        use_signal(|| props.value.clone().or_else(|| props.default_value.clone()));
    let mut open = use_signal(|| false);
    let mut focused_value = use_signal(|| None::<String>);
    let items = use_signal(Vec::<SelectItemHandle>::new);
    let mut disabled = use_signal(|| props.disabled);

    let trigger_id = use_id("select-trigger");
    let positioner_id = use_id("select-positioner");
    let viewport_id = use_id("select-viewport");

    let is_controlled = props.value.is_some();
    let on_value_change = props.on_value_change;

    let ctrl_value = props.value.clone();
    use_effect(use_reactive!(|(ctrl_value,)| {
        if let Some(v) = ctrl_value {
            internal_value.set(Some(v));
        }
    }));

    let is_disabled = props.disabled;
    use_effect(use_reactive!(|(is_disabled,)| {
        disabled.set(is_disabled);
    }));

    let set_value = use_callback(move |v: String| {
        if !is_controlled {
            internal_value.set(Some(v.clone()));
        }
        if let Some(handler) = on_value_change {
            handler.call(v);
        }
        open.set(false);
        focused_value.set(None);
    });

    let set_open = use_callback(move |state: bool| {
        if !*disabled.peek() {
            open.set(state);
            if !state {
                focused_value.set(None);
            }
        }
    });

    let focus_next = use_callback(move |()| {
        let enabled: Vec<SelectItemHandle> = items
            .read()
            .iter()
            .filter(|i| !i.disabled)
            .cloned()
            .collect();
        if enabled.is_empty() {
            return;
        }
        let current = focused_value.peek().clone();
        let next = match current {
            None => enabled.first().map(|i| i.value.clone()),
            Some(ref v) => {
                let idx = enabled.iter().position(|i| &i.value == v);
                match idx {
                    None => enabled.first().map(|i| i.value.clone()),
                    Some(i) => enabled
                        .get((i + 1).min(enabled.len() - 1))
                        .map(|x| x.value.clone()),
                }
            }
        };
        focused_value.set(next);
    });

    let focus_prev = use_callback(move |()| {
        let enabled: Vec<SelectItemHandle> = items
            .read()
            .iter()
            .filter(|i| !i.disabled)
            .cloned()
            .collect();
        if enabled.is_empty() {
            return;
        }
        let current = focused_value.peek().clone();
        let prev = match current {
            None => enabled.last().map(|i| i.value.clone()),
            Some(ref v) => {
                let idx = enabled.iter().position(|i| &i.value == v);
                match idx {
                    None => enabled.last().map(|i| i.value.clone()),
                    Some(i) => {
                        let prev_idx = if i == 0 { 0 } else { i - 1 };
                        enabled.get(prev_idx).map(|x| x.value.clone())
                    }
                }
            }
        };
        focused_value.set(prev);
    });

    let focus_first = use_callback(move |()| {
        let first = items
            .read()
            .iter()
            .find(|i| !i.disabled)
            .map(|i| i.value.clone());
        focused_value.set(first);
    });

    let focus_last = use_callback(move |()| {
        let last = items
            .read()
            .iter()
            .filter(|i| !i.disabled)
            .last()
            .map(|i| i.value.clone());
        focused_value.set(last);
    });

    let focus_by_char = use_callback(move |ch: char| {
        let ch_low = ch.to_lowercase().next().unwrap_or(ch);
        let found = items
            .read()
            .iter()
            .find(|i| !i.disabled && i.label.to_lowercase().starts_with(ch_low))
            .map(|i| i.value.clone());
        if found.is_some() {
            focused_value.set(found);
        }
    });

    let confirm_focused = use_callback(move |()| {
        if let Some(v) = focused_value.peek().clone() {
            set_value.call(v);
        }
    });

    use_context_provider(|| SelectContext {
        value: internal_value,
        set_value,
        open,
        set_open,
        trigger_id,
        positioner_id,
        viewport_id,
        disabled,
        items,
        focused_value,
        focus_next,
        focus_prev,
        focus_first,
        focus_last,
        focus_by_char,
        confirm_focused,
    });

    rsx! { {props.children} }
}
