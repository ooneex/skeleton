use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Mouse2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Mouse2Icon(props: Mouse2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 12H3V14C3 18.9706 7.02944 23 12 23C16.9706 23 21 18.9706 21 14L21 12Z",
                fill: "currentColor",
            }
            path {
                d: "M13 10H21C21 5.36745 17.5 1.55238 13 1.05493V10Z",
                fill: "currentColor",
            }
            path {
                d: "M11 10V1.05493C6.50005 1.55238 3 5.36745 3 10L11 10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
