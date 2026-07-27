use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarInputProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = input, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SidebarInput(props: SidebarInputProps) -> Element {
    rsx! {
        input {
            "data-slot": "sidebar-input",
            "data-sidebar": "input",
            class: cn([
                "ring-ring hover:ring-ring-active hover:ring focus-visible:ring-ring-active aria-invalid:ring-destructive/20 rounded ring bg-transparent transition-[color,box-shadow] focus-visible:ring aria-invalid:ring file:text-foreground placeholder:text-muted-foreground/60 w-full min-w-0 outline-none file:inline-flex file:ring-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 leading-relaxed",
                "bg-background h-8 w-full px-2.5 py-1 text-sm",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
        }
    }
}
