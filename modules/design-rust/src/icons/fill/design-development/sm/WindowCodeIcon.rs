use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WindowCodeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WindowCodeIcon(props: WindowCodeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 6C23 4.34315 21.6569 3 20 3H4C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34314 21 4 21H20C21.6569 21 23 19.6569 23 18V6ZM3 9L3 18C3 18.5523 3.44771 19 4 19H20C20.5523 19 21 18.5523 21 18V9H3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6.08576 16.4998L8.5858 13.9998L6.08578 11.4998L7.49998 10.0856L11.4143 13.9998L7.49995 17.914L6.08576 16.4998Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 15H18V17H13V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
