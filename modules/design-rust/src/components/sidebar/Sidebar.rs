use dioxus::prelude::*;

use crate::components::drawer::{DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle};
use crate::utils::cn;

use super::constants::SIDEBAR_WIDTH_MOBILE;
use super::useSidebar::{SidebarStateType, use_sidebar};

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum SidebarSideType {
    #[default]
    Left,
    Right,
}

impl SidebarSideType {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::Left => "left",
            Self::Right => "right",
        }
    }
}

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum SidebarVariantType {
    #[default]
    Sidebar,
    Floating,
    Inset,
}

impl SidebarVariantType {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::Sidebar => "sidebar",
            Self::Floating => "floating",
            Self::Inset => "inset",
        }
    }
}

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum SidebarCollapsibleType {
    #[default]
    Offcanvas,
    Icon,
    None,
}

impl SidebarCollapsibleType {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::Offcanvas => "offcanvas",
            Self::Icon => "icon",
            Self::None => "none",
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct SidebarProps {
    #[props(default)]
    pub side: SidebarSideType,
    #[props(default)]
    pub variant: SidebarVariantType,
    #[props(default)]
    pub collapsible: SidebarCollapsibleType,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Sidebar(props: SidebarProps) -> Element {
    let context = use_sidebar();
    let is_mobile = *context.is_mobile.read();
    let open_mobile = *context.open_mobile.read();
    let state = if *context.open.read() {
        SidebarStateType::Expanded
    } else {
        SidebarStateType::Collapsed
    };
    let side = props.side.as_str();
    let variant = props.variant.as_str();
    let collapsible = props.collapsible;

    if collapsible == SidebarCollapsibleType::None {
        return rsx! {
            div {
                "data-slot": "sidebar",
                class: cn([
                    "bg-background text-primary flex h-full w-(--sidebar-width) flex-col",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                ..props.attributes,
                {props.children}
            }
        };
    }

    if is_mobile {
        let side_class = if props.side == SidebarSideType::Left {
            "left-0 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=left]:data-open:slide-in-from-left-10"
        } else {
            "right-0 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=right]:data-open:slide-in-from-right-10"
        };
        return rsx! {
            DrawerContent {
                open: open_mobile,
                side: side.to_string(),
                modal: true,
                dismissible: true,
                class: Some(cn([
                    "bg-background text-primary fixed inset-y-0 z-50 flex h-full w-(--sidebar-width) flex-col p-0 outline-none",
                    "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 transition duration-200 ease-in-out",
                    side_class,
                ])),
                attributes: vec![
                    Attribute::new("style", format!("--sidebar-width: {SIDEBAR_WIDTH_MOBILE};"), None, false),
                    Attribute::new("tabindex", "-1", None, false),
                    Attribute::new("data-sidebar", "sidebar", None, false),
                    Attribute::new("data-slot", "sidebar", None, false),
                    Attribute::new("data-mobile", "true", None, false),
                    Attribute::new("data-side", side, None, false),
                ],
                on_dismiss: move |()| context.set_open_mobile.call(false),
                DrawerHeader { class: Some("sr-only".to_string()),
                    DrawerTitle { "Sidebar" }
                    DrawerDescription { "Displays the mobile sidebar." }
                }
                div { class: "flex h-full w-full flex-col", {props.children} }
            }
        };
    }

    let collapsible_attr = if state == SidebarStateType::Collapsed {
        collapsible.as_str()
    } else {
        ""
    };

    rsx! {
        div {
            class: "group peer text-primary hidden md:block",
            "data-state": state.as_str(),
            "data-collapsible": collapsible_attr,
            "data-variant": variant,
            "data-side": side,
            "data-slot": "sidebar",
            div {
                "data-slot": "sidebar-gap",
                class: cn([
                    "transition-[width] duration-200 ease-linear relative w-(--sidebar-width) bg-transparent",
                    "group-data-[collapsible=offcanvas]:w-0",
                    "group-data-[side=right]:rotate-180",
                    if props.variant == SidebarVariantType::Floating || props.variant == SidebarVariantType::Inset {
                        "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
                    } else {
                        "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
                    },
                ]),
            }
            div {
                "data-slot": "sidebar-container",
                class: cn([
                    "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
                    if props.side == SidebarSideType::Left {
                        "left-0 group-data-[collapsible=offcanvas]:-left-(--sidebar-width)"
                    } else {
                        "right-0 group-data-[collapsible=offcanvas]:-right-(--sidebar-width)"
                    },
                    if props.variant == SidebarVariantType::Floating || props.variant == SidebarVariantType::Inset {
                        "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
                    } else {
                        "group-data-[collapsible=icon]:w-(--sidebar-width-icon) border-ring group-data-[side=left]:border-r group-data-[side=right]:border-l"
                    },
                    props.class.as_deref().unwrap_or_default(),
                ]),
                ..props.attributes,
                div {
                    "data-sidebar": "sidebar",
                    "data-slot": "sidebar-inner",
                    class: "bg-background group-data-[variant=floating]:ring-ring group-data-[variant=floating]:rounded group-data-[variant=floating]:ring-1 flex size-full flex-col",
                    {props.children}
                }
            }
        }
    }
}
