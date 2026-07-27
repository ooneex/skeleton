use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MessagesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MessagesIcon(props: MessagesIconProps) -> Element {
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
                d: "M2 9C2 6.23858 4.23858 4 7 4H31C33.7614 4 36 6.23858 36 9V24C36 26.7614 33.7614 29 31 29H22.3225L8.5 38.9522V29H7C4.23858 29 2 26.7614 2 24V9Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M39 11H40.5C43.5376 11 46 13.4624 46 16.5V31.5C46 34.5376 43.5376 37 40.5 37H40V47.4284L25.5162 37H20.5V34H26.4838L37 41.5716V34H40.5C41.8807 34 43 32.8807 43 31.5V16.5C43 15.1193 41.8807 14 40.5 14H39V11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
