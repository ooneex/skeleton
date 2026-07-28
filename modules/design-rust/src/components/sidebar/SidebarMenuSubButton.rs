use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum SidebarMenuSubButtonSizeType {
    Sm,
    #[default]
    Md,
}

impl SidebarMenuSubButtonSizeType {
    pub fn class(self) -> &'static str {
        match self {
            Self::Sm => "h-6 text-xs",
            Self::Md => "h-7 text-sm",
        }
    }

    pub fn as_str(self) -> &'static str {
        match self {
            Self::Sm => "sm",
            Self::Md => "md",
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct SidebarMenuSubButtonProps {
    #[props(default)]
    pub size: SidebarMenuSubButtonSizeType,
    #[props(default = false)]
    pub is_active: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = a, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn SidebarMenuSubButton(props: SidebarMenuSubButtonProps) -> Element {
    rsx! {
        a {
            "data-slot": "sidebar-menu-sub-button",
            "data-sidebar": "menu-sub-button",
            "data-size": props.size.as_str(),
            "data-active": props.is_active.then_some("true"),
            class: cn([
                "text-primary ring-ring hover:bg-muted hover:text-primary active:bg-muted active:text-primary data-active:bg-muted data-active:text-primary gap-2 rounded px-2 focus-visible:ring-2 [&>svg]:size-4 flex min-w-0 -translate-x-px items-center overflow-hidden outline-hidden group-data-[collapsible=icon]:hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:shrink-0",
                props.size.class(),
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
