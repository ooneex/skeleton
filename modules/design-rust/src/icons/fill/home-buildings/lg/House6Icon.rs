use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct House6IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn House6Icon(props: House6IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.9999 2.09723L46.6053 19.7405L44.7595 22.1054L23.9999 5.90281L3.24034 22.1054L1.39453 19.7405L23.9999 2.09723Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M7 37.5V23.1709L23.9999 9.90271L41 23.1711V37.5C41 41.0898 38.0899 44 34.5 44H28V31H20V44H13.5C9.91015 44 7 41.0898 7 37.5Z",
                fill: "currentColor",
            }
        }
    }
}
