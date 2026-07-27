use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct H1Props {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn H1(props: H1Props) -> Element {
    rsx! {
        h1 {
            class: cn([
                "scroll-m-20 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-tight text-balance",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct H2Props {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn H2(props: H2Props) -> Element {
    rsx! {
        h2 {
            class: cn([
                "scroll-m-20 text-3xl font-semibold leading-[1.15] tracking-tight",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct H3Props {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn H3(props: H3Props) -> Element {
    rsx! {
        h3 {
            class: cn([
                "scroll-m-20 text-2xl font-semibold leading-[1.15] tracking-tight",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct H4Props {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn H4(props: H4Props) -> Element {
    rsx! {
        h4 {
            class: cn([
                "scroll-m-20 text-xl font-semibold leading-tight tracking-tight",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct H5Props {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn H5(props: H5Props) -> Element {
    rsx! {
        h5 {
            class: cn([
                "scroll-m-20 text-lg font-semibold leading-snug tracking-tight",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct H6Props {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn H6(props: H6Props) -> Element {
    rsx! {
        h6 {
            class: cn([
                "scroll-m-20 text-base font-medium leading-[1.4]",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
