#![allow(non_snake_case)]

use std::cell::Cell;
use std::rc::Rc;

use dioxus::prelude::*;

use crate::hooks::use_id;
use crate::utils::cn;

/// Where the highlight should move to when a navigation key is pressed.
#[derive(Clone, Copy, PartialEq, Eq)]
pub enum CommandFocusTargetType {
    Next,
    Previous,
    First,
    Last,
}

/// A `CommandItem` registered with its root, kept sorted by registration
/// index so keyboard navigation follows the rendered order.
#[derive(Clone)]
pub struct CommandItemEntryType {
    /// Registration index, unique inside a single command tree.
    pub index: usize,
    /// Identity of the item, reported to `on_select`.
    pub value: String,
    /// Haystack searched by the filter: the value plus every keyword.
    pub text: String,
    /// Registration index of the enclosing `CommandGroup`, when there is one.
    pub group: Option<usize>,
    pub disabled: bool,
    /// Fired when the item is clicked or Enter is pressed while highlighted.
    pub on_select: Option<EventHandler<String>>,
}

impl PartialEq for CommandItemEntryType {
    fn eq(&self, other: &Self) -> bool {
        self.index == other.index
            && self.value == other.value
            && self.text == other.text
            && self.group == other.group
            && self.disabled == other.disabled
    }
}

/// Matches an item against the current query.
///
/// # Rust differences from TypeScript
/// `cmdk` ranks items with the `command-score` fuzzy algorithm and reorders
/// the list by score. There is no Rust port of that algorithm here, so items
/// keep their authored order and a match is a case-insensitive lookup of every
/// whitespace-separated token of the query inside the item text.
pub fn command_matches(text: &str, query: &str) -> bool {
    let query = query.trim().to_lowercase();

    if query.is_empty() {
        return true;
    }

    let text = text.to_lowercase();

    query.split_whitespace().all(|token| text.contains(token))
}

/// Shared state of a command palette: the query, the highlighted value and the
/// registry of items used for filtering, group visibility and keyboard
/// navigation. `cmdk` keeps this in its own store; the port rebuilds it on top
/// of Dioxus signals.
#[derive(Clone)]
pub struct CommandContext {
    /// Current search query, owned by the root and written by `CommandInput`.
    pub search: Signal<String>,
    /// Value of the highlighted item (empty when nothing is highlighted).
    pub highlighted: Signal<String>,
    /// Every registered item, ordered by registration index.
    pub items: Signal<Vec<CommandItemEntryType>>,
    /// `false` disables filtering entirely, like `shouldFilter={false}`.
    pub should_filter: Signal<bool>,
    /// Wraps around at both ends of the list when `true`.
    pub loop_navigation: Signal<bool>,
    /// Flipped to `true` once the first render settled and every item had a
    /// chance to register. Guards the empty state and group visibility so
    /// neither flashes before the registry is populated.
    pub ready: Signal<bool>,
    /// Stable id prefix used to build the input, list and item ids.
    pub id: String,
    on_value_change: Option<EventHandler<String>>,
    counter: Rc<Cell<usize>>,
}

impl CommandContext {
    /// Registration index handed to the next item or group. Components render
    /// in document order, so the counter doubles as the DOM order.
    pub fn next_index(&self) -> usize {
        let index = self.counter.get();
        self.counter.set(index + 1);

        index
    }

    pub fn input_id(&self) -> String {
        format!("{}-input", self.id)
    }

    pub fn list_id(&self) -> String {
        format!("{}-list", self.id)
    }

    pub fn item_id(&self, index: usize) -> String {
        format!("{}-item-{index}", self.id)
    }

    pub fn group_heading_id(&self, index: usize) -> String {
        format!("{}-group-{index}", self.id)
    }

    /// Whether `text` survives the current query.
    pub fn matches(&self, text: &str) -> bool {
        if !*self.should_filter.read() {
            return true;
        }

        command_matches(text, &self.search.read())
    }

    /// Items left after filtering, in document order.
    pub fn visible_items(&self) -> Vec<CommandItemEntryType> {
        self.items
            .read()
            .iter()
            .filter(|entry| self.matches(&entry.text))
            .cloned()
            .collect()
    }

    /// `true` when at least one item of `group` survives the current query.
    pub fn has_group_matches(&self, group: usize) -> bool {
        self.items
            .read()
            .iter()
            .any(|entry| entry.group == Some(group) && self.matches(&entry.text))
    }

    /// `true` when nothing matches, which is what `CommandEmpty` renders on.
    pub fn is_empty(&self) -> bool {
        !self
            .items
            .read()
            .iter()
            .any(|entry| self.matches(&entry.text))
    }

    /// `true` once every item had a chance to register itself.
    pub fn is_ready(&self) -> bool {
        *self.ready.read()
    }

    pub fn is_highlighted(&self, value: &str) -> bool {
        *self.highlighted.read() == value
    }

    /// Dom id of the highlighted item, wired to `aria-activedescendant`.
    pub fn active_item_id(&self) -> Option<String> {
        let highlighted = self.highlighted.read().clone();

        self.items
            .read()
            .iter()
            .find(|entry| entry.value == highlighted)
            .map(|entry| self.item_id(entry.index))
    }

    /// Highlights `value` and reports it through `on_value_change`.
    pub fn highlight(&mut self, value: String) {
        if *self.highlighted.peek() == value {
            return;
        }

        self.highlighted.set(value.clone());

        if let Some(on_value_change) = self.on_value_change {
            on_value_change.call(value);
        }
    }

    /// Adds an item to the registry, or replaces it when its data changed.
    /// The first registered item is highlighted, mirroring `cmdk`, which
    /// always keeps one item selected.
    pub fn register(&mut self, entry: CommandItemEntryType) {
        let takes_highlight = self.highlighted.peek().is_empty() && self.matches(&entry.text);
        let value = entry.value.clone();

        {
            let mut items = self.items.write();
            items.retain(|item| item.index != entry.index);
            let position = items.partition_point(|item| item.index < entry.index);
            items.insert(position, entry);
        }

        if takes_highlight {
            self.highlighted.set(value);
        }
    }

    /// Drops an unmounted item and moves the highlight when it was the
    /// highlighted one.
    pub fn unregister(&mut self, index: usize) {
        let removed = {
            let mut items = self.items.write();
            items
                .iter()
                .position(|item| item.index == index)
                .map(|position| items.remove(position))
        };

        let Some(removed) = removed else {
            return;
        };

        if *self.highlighted.peek() == removed.value {
            let next = self.first_visible_value();
            self.highlighted.set(next);
        }
    }

    /// Stores a new query and re-highlights the first surviving item.
    pub fn set_search(&mut self, value: String) {
        if *self.search.peek() == value {
            return;
        }

        self.search.set(value);

        let next = self.first_visible_value();
        self.highlighted.set(next);
    }

    /// Moves the highlight, wrapping around only when `loop_navigation` is on.
    pub fn move_highlight(&mut self, target: CommandFocusTargetType) {
        let items = self.visible_items();

        if items.is_empty() {
            return;
        }

        let last = items.len() - 1;
        let wraps = *self.loop_navigation.peek();
        let highlighted = self.highlighted.peek().clone();
        let current = items.iter().position(|item| item.value == highlighted);

        let index = match (target, current) {
            (CommandFocusTargetType::First, _) => 0,
            (CommandFocusTargetType::Last, _) => last,
            (CommandFocusTargetType::Next, None) => 0,
            (CommandFocusTargetType::Previous, None) => last,
            (CommandFocusTargetType::Next, Some(current)) => {
                if current == last {
                    if wraps { 0 } else { last }
                } else {
                    current + 1
                }
            }
            (CommandFocusTargetType::Previous, Some(current)) => {
                if current == 0 {
                    if wraps { last } else { 0 }
                } else {
                    current - 1
                }
            }
        };

        let value = items[index].value.clone();
        self.highlight(value);
    }

    /// Fires `on_select` of `value`, unless the item is disabled or gone.
    pub fn select(&self, value: &str) {
        let entry = self
            .items
            .peek()
            .iter()
            .find(|entry| entry.value == value)
            .cloned();

        let Some(entry) = entry else {
            return;
        };

        if entry.disabled {
            return;
        }

        if let Some(on_select) = entry.on_select {
            on_select.call(entry.value.clone());
        }
    }

    /// Fires `on_select` of the highlighted item — the Enter key path.
    pub fn select_highlighted(&self) {
        let highlighted = self.highlighted.peek().clone();
        self.select(&highlighted);
    }

    fn first_visible_value(&self) -> String {
        self.visible_items()
            .first()
            .map(|entry| entry.value.clone())
            .unwrap_or_default()
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct CommandProps {
    /// Controlled highlighted value. When set, the palette mirrors it and
    /// reports every change through `on_value_change`.
    #[props(default)]
    pub value: Option<String>,
    /// Item highlighted on first render when the palette is uncontrolled.
    /// Defaults to the first item, like `cmdk`.
    #[props(default)]
    pub default_value: Option<String>,
    /// Called with the value of the newly highlighted item.
    pub on_value_change: Option<EventHandler<String>>,
    /// Query the palette starts with, mirroring `defaultValue` on the input.
    #[props(default)]
    pub default_search: String,
    /// `false` renders every item untouched, like `shouldFilter={false}`.
    #[props(default = true)]
    pub should_filter: bool,
    /// Wraps the highlight around at both ends of the list, like `loop`.
    #[props(default = false)]
    pub loop_navigation: bool,
    /// Screen-reader label announced for the palette.
    #[props(default)]
    pub label: Option<String>,
    /// Called when Escape is pressed inside the palette.
    pub on_escape: Option<EventHandler<()>>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Root of the command palette. Sub-components are plain components exported
/// from the same module, so a single import exposes the whole API:
///
/// ```rust,ignore
/// rsx! {
///     Command {
///         CommandInput { placeholder: "Type a command..." }
///         CommandList {
///             CommandEmpty { "No results." }
///             CommandGroup { heading: "Actions",
///                 CommandItem { value: "open", on_select: move |value| open(value),
///                     "Open"
///                     CommandShortcut { "⌘O" }
///                 }
///             }
///         }
///     }
/// }
/// ```
///
/// # Rust differences from TypeScript
/// The TypeScript component delegates filtering, highlighting and keyboard
/// navigation to `cmdk`. No Rust equivalent exists, so this port implements
/// them here: items self-register with the root, the query filters them out of
/// the tree, ArrowUp / ArrowDown / Home / End move the highlight, Enter selects
/// it and Escape calls `on_escape`. `cmdk`'s DOM markers (`cmdk-item`,
/// `cmdk-group-heading`, …) are reproduced because the Tailwind classes copied
/// from the TSX select on them.
#[component]
pub fn Command(props: CommandProps) -> Element {
    let id = use_id("command");

    let search = use_signal(|| props.default_search.clone());
    let items = use_signal(Vec::<CommandItemEntryType>::new);
    let counter = use_hook(|| Rc::new(Cell::new(0usize)));

    let mut highlighted = use_signal(|| {
        props
            .value
            .clone()
            .or_else(|| props.default_value.clone())
            .unwrap_or_default()
    });

    let controlled = props.value.clone();
    use_effect(use_reactive!(|(controlled,)| {
        if let Some(controlled) = controlled {
            highlighted.set(controlled);
        }
    }));

    let mut should_filter = use_signal(|| props.should_filter);
    let mut loop_navigation = use_signal(|| props.loop_navigation);

    let (filters, wraps) = (props.should_filter, props.loop_navigation);
    use_effect(use_reactive!(|(filters, wraps)| {
        should_filter.set(filters);
        loop_navigation.set(wraps);
    }));

    let mut ready = use_signal(|| false);
    use_effect(move || ready.set(true));

    let context = use_context_provider(|| CommandContext {
        search,
        highlighted,
        items,
        should_filter,
        loop_navigation,
        ready,
        id: id.clone(),
        on_value_change: props.on_value_change,
        counter,
    });

    let input_id = context.input_id();
    let on_escape = props.on_escape;

    rsx! {
        div {
            "data-slot": "command",
            "cmdk-root": "",
            class: cn([
                "bg-popover text-popover-foreground rounded-xl! flex size-full flex-col overflow-hidden",
                props.class.as_deref().unwrap_or_default(),
            ]),
            onkeydown: {
                let mut context = context.clone();
                move |event: KeyboardEvent| {
                    let target = match event.key() {
                        Key::ArrowDown => CommandFocusTargetType::Next,
                        Key::ArrowUp => CommandFocusTargetType::Previous,
                        Key::Home => CommandFocusTargetType::First,
                        Key::End => CommandFocusTargetType::Last,
                        Key::Enter => {
                            event.prevent_default();
                            context.select_highlighted();
                            return;
                        }
                        Key::Escape => {
                            if let Some(on_escape) = on_escape {
                                event.prevent_default();
                                on_escape.call(());
                            }
                            return;
                        }
                        _ => return,
                    };
                    event.prevent_default();
                    context.move_highlight(target);
                }
            },
            ..props.attributes,
            if let Some(text) = props.label.as_deref() {
                label { "cmdk-label": "", r#for: "{input_id}", class: "sr-only", "{text}" }
            }
            {props.children}
        }
    }
}
