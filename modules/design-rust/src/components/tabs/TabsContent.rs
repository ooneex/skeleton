use dioxus::prelude::*;

use super::Tabs::TabsContext;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct TabsContentProps {
    /// The value identifying this panel.
    pub value: String,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn TabsContent(props: TabsContentProps) -> Element {
    let tabs = use_context::<TabsContext>();
    let is_active = tabs.is_active(&props.value);
    let panel_id = format!("tabs-panel-{}", props.value);
    let trigger_id = format!("tabs-trigger-{}", props.value);

    rsx! {
        div {
            id: panel_id,
            role: "tabpanel",
            "data-slot": "tabs-content",
            "aria-labelledby": trigger_id,
            hidden: !is_active,
            class: cn([
                "text-sm flex-1 outline-none animate-in fade-in-0 slide-in-from-bottom-2 duration-200",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
