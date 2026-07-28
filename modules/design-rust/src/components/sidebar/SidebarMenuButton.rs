use dioxus::prelude::*;

use crate::components::tooltip::{Tooltip, TooltipContent, TooltipTrigger};
use crate::hooks::{AnchorAlignType, AnchorSideType};
use crate::utils::cn;

use super::useSidebar::{SidebarStateType, use_sidebar};

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum SidebarMenuButtonVariantType {
    #[default]
    Default,
    Outline,
}

impl SidebarMenuButtonVariantType {
    pub fn class(self) -> &'static str {
        match self {
            Self::Default => "hover:bg-muted hover:text-primary",
            Self::Outline => {
                "bg-background hover:bg-muted hover:text-primary ring-1 ring-ring hover:ring-muted"
            }
        }
    }
}

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum SidebarMenuButtonSizeType {
    Xs,
    Sm,
    #[default]
    Md,
    Lg,
}

impl SidebarMenuButtonSizeType {
    pub fn class(self) -> &'static str {
        match self {
            Self::Xs => "h-6 text-xs",
            Self::Sm => "h-7 text-xs",
            Self::Md => "h-8 text-sm",
            Self::Lg => "h-12 text-sm group-data-[collapsible=icon]:p-0!",
        }
    }

    pub fn as_str(self) -> &'static str {
        match self {
            Self::Xs => "xs",
            Self::Sm => "sm",
            Self::Md => "md",
            Self::Lg => "lg",
        }
    }
}

pub fn sidebar_menu_button_variants(
    variant: SidebarMenuButtonVariantType,
    size: SidebarMenuButtonSizeType,
    class: Option<&str>,
) -> String {
    cn([
        "ring-ring hover:bg-muted hover:text-primary active:bg-muted active:text-primary data-active:bg-muted data-active:text-primary data-open:hover:bg-muted data-open:hover:text-primary gap-2 rounded p-2 text-left text-sm group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 data-active:font-medium peer/menu-button flex w-full items-center overflow-hidden outline-hidden group/menu-button disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0",
        variant.class(),
        size.class(),
        class.unwrap_or_default(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct SidebarMenuButtonProps {
    #[props(default = false)]
    pub is_active: bool,
    #[props(default)]
    pub variant: SidebarMenuButtonVariantType,
    #[props(default)]
    pub size: SidebarMenuButtonSizeType,
    #[props(default)]
    pub tooltip: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Main clickable entry of a sidebar menu item, with an optional tooltip shown
/// while the sidebar is collapsed.
///
/// # Limitations
/// The TypeScript component takes a `render` element and clones the button
/// props onto it, which is how callers turn the entry into a router link. There
/// is no `cloneElement` in Dioxus, so props cannot be pushed into a
/// caller-supplied `Element` and this port always renders a `<button>`; wrap it
/// in a link or spread link attributes through `attributes` instead.
#[component]
pub fn SidebarMenuButton(props: SidebarMenuButtonProps) -> Element {
    let context = use_sidebar();
    let is_mobile = *context.is_mobile.read();
    let state = if *context.open.read() {
        SidebarStateType::Expanded
    } else {
        SidebarStateType::Collapsed
    };
    let show_tooltip =
        props.tooltip.is_some() && state == SidebarStateType::Collapsed && !is_mobile;
    let size = props.size.as_str();
    let class = sidebar_menu_button_variants(props.variant, props.size, props.class.as_deref());

    if !show_tooltip {
        return rsx! {
            button {
                r#type: "button",
                "data-slot": "sidebar-menu-button",
                "data-sidebar": "menu-button",
                "data-size": size,
                "data-active": props.is_active.then_some("true"),
                class: class,
                ..props.attributes,
                {props.children}
            }
        };
    }

    let tooltip = props.tooltip.unwrap_or_default();
    rsx! {
        Tooltip {
            TooltipTrigger {
                button {
                    r#type: "button",
                    "data-slot": "sidebar-menu-button",
                    "data-sidebar": "menu-button",
                    "data-size": size,
                    "data-active": props.is_active.then_some("true"),
                    class: class,
                    ..props.attributes,
                    {props.children}
                }
            }
            TooltipContent {
                side: Some(AnchorSideType::Right),
                align: Some(AnchorAlignType::Center),
                class: Some("bg-background text-primary".to_string()),
                "{tooltip}"
            }
        }
    }
}
