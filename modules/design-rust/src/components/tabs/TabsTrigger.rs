use dioxus::prelude::*;

use super::Tabs::{TabFocusTarget, TabsContext, next_tab_id};
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct TabsTriggerProps {
    /// Value of this tab; must match the corresponding `TabsContent` value.
    pub value: String,
    #[props(default = false)]
    pub disabled: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn TabsTrigger(props: TabsTriggerProps) -> Element {
    let mut tabs = use_context::<TabsContext>();
    let id = use_hook(next_tab_id);
    let trigger_id = format!("tabs-trigger-{}", props.value);
    let panel_id = format!("tabs-panel-{}", props.value);
    let is_active = tabs.is_active(&props.value);
    let orientation = *tabs.orientation.read();

    use_drop(move || {
        tabs.unregister_trigger(id);
    });

    rsx! {
        button {
            id: trigger_id,
            r#type: "button",
            role: "tab",
            "data-slot": "tabs-trigger",
            "aria-selected": if is_active { "true" } else { "false" },
            "aria-controls": panel_id,
            "data-active": is_active.then_some("true"),
            disabled: props.disabled,
            class: cn([
                "not-data-active:cursor-pointer",
                "z-1 gap-1.5 rounded tracking-wide select-none outline-none shrink-0 [&_svg:not([class*='size-'])]:size-3 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-muted-foreground hover:text-foreground relative inline-flex flex-1 items-center justify-center whitespace-nowrap transition-colors group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
                "h-full",
                "group-data-[size=xs]/tabs-list:px-2 group-data-[size=xs]/tabs-list:text-xs group-data-[size=xs]/tabs-list:gap-1 group-data-[size=xs]/tabs-list:[&_svg:not([class*='size-'])]:size-3",
                "group-data-[size=sm]/tabs-list:px-2.5 group-data-[size=sm]/tabs-list:text-sm group-data-[size=sm]/tabs-list:gap-1",
                "group-data-[size=md]/tabs-list:px-2.5 group-data-[size=md]/tabs-list:text-sm group-data-[size=md]/tabs-list:gap-1.5",
                "group-data-[size=lg]/tabs-list:px-2.5 group-data-[size=lg]/tabs-list:text-sm group-data-[size=lg]/tabs-list:gap-1.5",
                "group-data-[variant=default]/tabs-list:data-active:text-tabs-accent-foreground group-data-[variant=line]/tabs-list:data-active:text-foreground",
                "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent",
                props.class.as_deref().unwrap_or_default(),
            ]),
            onmounted: move |event| tabs.register_trigger(id, event.data()),
            onclick: move |_| {
                if !props.disabled {
                    tabs.activate(props.value.clone());
                }
            },
            onkeydown: move |event| {
                use dioxus::prelude::Key;
                let target = match (event.key(), orientation) {
                    (Key::ArrowRight, _) | (Key::ArrowDown, _) => TabFocusTarget::Next,
                    (Key::ArrowLeft, _) | (Key::ArrowUp, _) => TabFocusTarget::Previous,
                    (Key::Home, _) => TabFocusTarget::First,
                    (Key::End, _) => TabFocusTarget::Last,
                    _ => return,
                };
                event.prevent_default();
                tabs.move_focus(id, target);
            },
            ..props.attributes,
            {props.children}
        }
    }
}
