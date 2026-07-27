use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct PageLoaderProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PageLoader(props: PageLoaderProps) -> Element {
    rsx! {
        div {
            "data-slot": "page-loader",
            class: cn([
                "flex flex-col items-center justify-center min-h-screen gap-8",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            img { src: "/logo-full.svg", alt: "Ooneex", class: "h-10 animate-pulse" }
        }
    }
}
