use std::rc::Rc;
use std::sync::atomic::{AtomicUsize, Ordering};

use dioxus::prelude::*;

use crate::utils::cn;

static NEXT_ITEM_ID: AtomicUsize = AtomicUsize::new(0);

/// Allocates a process-wide unique id used to wire `aria-controls` /
/// `aria-labelledby` between a trigger and its panel.
pub(crate) fn next_item_id() -> usize {
    NEXT_ITEM_ID.fetch_add(1, Ordering::Relaxed)
}

/// Where focus should move to when a roving-focus key is pressed on a trigger.
#[derive(Clone, Copy, PartialEq, Eq)]
pub(crate) enum FocusTarget {
    Next,
    Previous,
    First,
    Last,
}

/// A trigger element registered with the root, kept sorted by item id so
/// keyboard navigation follows the rendered order.
#[derive(Clone)]
pub(crate) struct TriggerHandle {
    pub(crate) id: usize,
    pub(crate) element: Rc<MountedData>,
}

/// Shared state of an accordion: which items are open, whether the whole group
/// is disabled, and the registry used for keyboard navigation.
#[derive(Clone, Copy)]
pub(crate) struct AccordionContext {
    open: Signal<Vec<String>>,
    disabled: Signal<bool>,
    triggers: Signal<Vec<TriggerHandle>>,
    toggle: Callback<String>,
}

impl AccordionContext {
    pub(crate) fn is_open(&self, value: &str) -> bool {
        self.open.read().iter().any(|item| item == value)
    }

    pub(crate) fn is_disabled(&self) -> bool {
        *self.disabled.read()
    }

    pub(crate) fn toggle(&self, value: String) {
        self.toggle.call(value);
    }

    pub(crate) fn register_trigger(&mut self, id: usize, element: Rc<MountedData>) {
        let mut triggers = self.triggers.write();
        triggers.retain(|trigger| trigger.id != id);
        triggers.push(TriggerHandle { id, element });
        triggers.sort_by_key(|trigger| trigger.id);
    }

    pub(crate) fn unregister_trigger(&mut self, id: usize) {
        self.triggers.write().retain(|trigger| trigger.id != id);
    }

    /// Moves focus between triggers, wrapping around at both ends.
    pub(crate) fn move_focus(&self, from: usize, target: FocusTarget) {
        let triggers = self.triggers.read().clone();

        if triggers.is_empty() {
            return;
        }

        let current = triggers.iter().position(|trigger| trigger.id == from);
        let last = triggers.len() - 1;

        let index = match (target, current) {
            (FocusTarget::First, _) => 0,
            (FocusTarget::Last, _) => last,
            (FocusTarget::Next, Some(current)) => {
                if current == last {
                    0
                } else {
                    current + 1
                }
            }
            (FocusTarget::Previous, Some(current)) => {
                if current == 0 {
                    last
                } else {
                    current - 1
                }
            }
            (_, None) => return,
        };

        let Some(handle) = triggers.get(index).cloned() else {
            return;
        };

        spawn(async move {
            let _ = handle.element.set_focus(true).await;
        });
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct AccordionProps {
    /// Controlled list of open item values. When set, the accordion mirrors it
    /// and reports every change through `on_value_change`.
    #[props(default)]
    pub value: Option<Vec<String>>,
    /// Items opened on first render when the accordion is uncontrolled.
    #[props(default)]
    pub default_value: Vec<String>,
    /// Allows several panels to stay open at once.
    #[props(default = true)]
    pub multiple: bool,
    /// Freezes every trigger of the group.
    #[props(default = false)]
    pub disabled: bool,
    /// Called with the new list of open values whenever an item is toggled.
    pub on_value_change: Option<EventHandler<Vec<String>>>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Root of the accordion. Sub-components are plain components exported from the
/// same module, so a single import exposes the whole API:
///
/// ```rust,ignore
/// rsx! {
///     Accordion { default_value: vec!["a".to_string()],
///         AccordionItem { value: "a",
///             AccordionTrigger { "Title" }
///             AccordionContent { "Body" }
///         }
///     }
/// }
/// ```
///
/// Shared state (open items, roving focus) is managed internally through the
/// accordion context, so consumers never wire it up themselves.
#[component]
pub fn Accordion(props: AccordionProps) -> Element {
    let mut open = use_signal(|| {
        props
            .value
            .clone()
            .unwrap_or_else(|| props.default_value.clone())
    });
    let mut disabled = use_signal(|| props.disabled);
    let mut multiple = use_signal(|| props.multiple);
    let triggers = use_signal(Vec::<TriggerHandle>::new);

    let controlled = props.value.clone();
    use_effect(use_reactive!(|(controlled,)| {
        if let Some(controlled) = controlled {
            open.set(controlled);
        }
    }));

    let (is_disabled, is_multiple) = (props.disabled, props.multiple);
    use_effect(use_reactive!(|(is_disabled, is_multiple)| {
        disabled.set(is_disabled);
        multiple.set(is_multiple);
    }));

    let on_value_change = props.on_value_change;
    let is_controlled = props.value.is_some();

    let toggle = use_callback(move |value: String| {
        let mut next = open.peek().clone();

        if let Some(index) = next.iter().position(|item| *item == value) {
            next.remove(index);
        } else if *multiple.peek() {
            next.push(value);
        } else {
            next = vec![value];
        }

        if !is_controlled {
            open.set(next.clone());
        }

        if let Some(on_value_change) = on_value_change {
            on_value_change.call(next);
        }
    });

    use_context_provider(|| AccordionContext {
        open,
        disabled,
        triggers,
        toggle,
    });

    rsx! {
        div {
            "data-slot": "accordion",
            "data-disabled": is_disabled.then_some("true"),
            class: cn(["flex w-full flex-col gap-3", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
