use std::rc::Rc;
use std::sync::atomic::{AtomicUsize, Ordering};

use dioxus::prelude::*;

use crate::utils::cn;

static NEXT_TAB_ID: AtomicUsize = AtomicUsize::new(0);

pub(crate) fn next_tab_id() -> usize {
    NEXT_TAB_ID.fetch_add(1, Ordering::Relaxed)
}

/// Orientation of the tab list.
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum TabsOrientationType {
    #[default]
    Horizontal,
    Vertical,
}

impl TabsOrientationType {
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Horizontal => "horizontal",
            Self::Vertical => "vertical",
        }
    }
}

/// A trigger registered with the root for keyboard navigation.
#[derive(Clone)]
pub(crate) struct TabTriggerHandle {
    pub(crate) id: usize,
    pub(crate) element: Rc<MountedData>,
}

/// Where focus should move on keyboard navigation.
#[derive(Clone, Copy)]
pub(crate) enum TabFocusTarget {
    Next,
    Previous,
    First,
    Last,
}

/// Shared state across all tabs sub-components.
#[derive(Clone, Copy)]
pub(crate) struct TabsContext {
    pub(crate) active: Signal<String>,
    pub(crate) orientation: Signal<TabsOrientationType>,
    pub(crate) list_id: Signal<String>,
    pub(crate) set_active: Callback<String>,
    pub(crate) triggers: Signal<Vec<TabTriggerHandle>>,
}

impl TabsContext {
    pub(crate) fn is_active(&self, value: &str) -> bool {
        *self.active.read() == value
    }

    pub(crate) fn activate(&self, value: String) {
        self.set_active.call(value);
    }

    pub(crate) fn register_trigger(&mut self, id: usize, element: Rc<MountedData>) {
        let mut triggers = self.triggers.write();
        triggers.retain(|t| t.id != id);
        triggers.push(TabTriggerHandle { id, element });
        triggers.sort_by_key(|t| t.id);
    }

    pub(crate) fn unregister_trigger(&mut self, id: usize) {
        self.triggers.write().retain(|t| t.id != id);
    }

    pub(crate) fn move_focus(&self, from: usize, target: TabFocusTarget) {
        let triggers = self.triggers.read().clone();
        if triggers.is_empty() {
            return;
        }
        let current = triggers.iter().position(|t| t.id == from);
        let last = triggers.len() - 1;
        let index = match (target, current) {
            (TabFocusTarget::First, _) => 0,
            (TabFocusTarget::Last, _) => last,
            (TabFocusTarget::Next, Some(i)) => {
                if i == last {
                    0
                } else {
                    i + 1
                }
            }
            (TabFocusTarget::Previous, Some(i)) => {
                if i == 0 {
                    last
                } else {
                    i - 1
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
pub struct TabsProps {
    /// Controlled active tab value.
    #[props(default)]
    pub value: Option<String>,
    /// Initial active tab when uncontrolled.
    #[props(default)]
    pub default_value: Option<String>,
    #[props(default)]
    pub orientation: Option<TabsOrientationType>,
    /// Called with the new value whenever the active tab changes.
    pub on_value_change: Option<EventHandler<String>>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Compound tabs component.
///
/// ```rust,ignore
/// rsx! {
///     Tabs { default_value: "a".to_string(),
///         TabsList {
///             TabsTrigger { value: "a", "Tab A" }
///             TabsTrigger { value: "b", "Tab B" }
///             TabsIndicator {}
///         }
///         TabsContent { value: "a", "Panel A" }
///         TabsContent { value: "b", "Panel B" }
///     }
/// }
/// ```
#[component]
pub fn Tabs(props: TabsProps) -> Element {
    let orientation = props.orientation.unwrap_or_default();
    let default_val = props.default_value.clone().unwrap_or_default();
    let list_id_val = format!("tabs-list-{}", next_tab_id());

    let (active, set_active) =
        crate::hooks::use_controlled_state(props.value.clone(), default_val, props.on_value_change);

    let mut orientation_signal = use_signal(|| orientation);
    let list_id = use_signal(|| list_id_val);
    let triggers = use_signal(Vec::<TabTriggerHandle>::new);

    let (prop_orientation,) = (props.orientation.unwrap_or_default(),);
    use_effect(use_reactive!(|(prop_orientation,)| {
        orientation_signal.set(prop_orientation);
    }));

    use_context_provider(|| TabsContext {
        active,
        orientation: orientation_signal,
        list_id,
        set_active,
        triggers,
    });

    rsx! {
        div {
            "data-slot": "tabs",
            "data-orientation": orientation.as_str(),
            class: cn([
                "gap-2 group/tabs flex data-[orientation=horizontal]:flex-col",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
