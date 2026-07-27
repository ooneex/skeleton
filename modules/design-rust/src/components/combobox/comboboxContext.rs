use dioxus::prelude::*;

/// Shared state for the [`Combobox`](super::Combobox::Combobox) tree.
#[derive(Clone)]
pub struct ComboboxContext {
    /// Whether the popup is open.
    pub open: Signal<bool>,
    /// Currently selected value(s). Multi-select stores multiple entries.
    pub value: Signal<Vec<String>>,
    /// The text in the search / chip input.
    pub input_value: Signal<String>,
    /// The value of the currently keyboard-highlighted item (empty = none).
    pub highlighted_value: Signal<String>,
    /// Flat ordered list of item values registered by [`ComboboxItem`] — used
    /// for ArrowUp / ArrowDown / Home / End navigation.
    pub items: Signal<Vec<String>>,
    /// Callback fired when the selected value changes (single-select mode).
    pub on_value_change: Option<EventHandler<String>>,
    /// Callback fired when the chip input text changes.
    pub on_input_value_change: Option<EventHandler<String>>,
    /// Whether the whole widget is disabled.
    pub disabled: bool,
}

impl ComboboxContext {
    /// Toggle `value` in the selection list, then fire `on_value_change`.
    pub fn toggle_value(&mut self, value: String) {
        let mut list = self.value.write();
        if let Some(pos) = list.iter().position(|v| *v == value) {
            list.remove(pos);
        } else {
            list.push(value.clone());
        }
        if let Some(ref cb) = self.on_value_change {
            cb.call(value);
        }
    }

    /// Replace the entire selection with a single value and close the popup.
    pub fn select_value(&mut self, value: String) {
        let is_selected = self.value.read().contains(&value);
        if is_selected {
            let mut list = self.value.write();
            list.retain(|v| *v != value);
        } else {
            self.value.write().push(value.clone());
        }
        if let Some(ref cb) = self.on_value_change {
            cb.call(value);
        }
        self.open.set(false);
    }

    pub fn is_selected(&self, value: &str) -> bool {
        self.value.read().iter().any(|v| v == value)
    }
}
