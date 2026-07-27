use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct PProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn P(props: PProps) -> Element {
    rsx! {
        p {
            class: cn([props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct LeadProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Lead(props: LeadProps) -> Element {
    rsx! {
        p {
            class: cn(["text-muted-foreground text-xl", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct LargeProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Large(props: LargeProps) -> Element {
    rsx! {
        div {
            class: cn(["text-lg font-semibold", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct SmallProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Small(props: SmallProps) -> Element {
    rsx! {
        small {
            class: cn(["text-sm font-normal", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct MutedProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Muted(props: MutedProps) -> Element {
    rsx! {
        p {
            class: cn(["text-muted-foreground", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
