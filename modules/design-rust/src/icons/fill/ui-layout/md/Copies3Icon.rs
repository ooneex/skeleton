use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Copies3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Copies3Icon(props: Copies3IconProps) -> Element {
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
                d: "M2 4.5C2 3.11929 3.11929 2 4.5 2L16.5 2C17.8807 2 19 3.11929 19 4.5V16.5C19 17.8807 17.8807 19 16.5 19H4.5C3.11929 19 2 17.8807 2 16.5L2 4.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M7 21V21.5C7 22.8807 8.11929 24 9.5 24H21.5C22.8807 24 24 22.8807 24 21.5V9.5C24 8.11929 22.8807 7 21.5 7H21V18C21 19.6569 19.6569 21 18 21H7Z",
                fill: "currentColor",
            }
            path {
                d: "M12 26V26.5C12 27.8807 13.1193 29 14.5 29H26.5C27.8807 29 29 27.8807 29 26.5V14.5C29 13.1193 27.8807 12 26.5 12H26V23C26 24.6569 24.6569 26 23 26H12Z",
                fill: "currentColor",
            }
        }
    }
}
