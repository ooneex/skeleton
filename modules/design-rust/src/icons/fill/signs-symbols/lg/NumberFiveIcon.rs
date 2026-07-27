use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberFiveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberFiveIcon(props: NumberFiveIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M32 31.5C32 26.2533 27.7467 22 22.5 22H13V4H32V7H16V19H22.5C29.4036 19 35 24.5964 35 31.5C35 38.4036 29.4036 44 22.5 44H13V41H22.5C27.7467 41 32 36.7467 32 31.5Z",
                fill: "currentColor",
            }
        }
    }
}
