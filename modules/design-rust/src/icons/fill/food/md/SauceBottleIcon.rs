use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SauceBottleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SauceBottleIcon(props: SauceBottleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 27C24 29.2091 22.2091 31 20 31H12C9.79086 31 8 29.2091 8 27V11H24V27ZM21 18.2412C17.7287 17.3371 14.2713 17.3371 11 18.2412V26H21V18.2412Z",
                fill: "currentColor",
            }
            path {
                d: "M24 9H8V7C8 5.34315 9.34315 4 11 4H13.2656L14.7305 0H17.1934L18.6934 4H21C22.6569 4 24 5.34315 24 7V9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
