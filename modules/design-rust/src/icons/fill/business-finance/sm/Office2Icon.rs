use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Office2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Office2Icon(props: Office2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M1 22V14.2792L4 13.2792V22H1Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 8H6V22L14 22L14 8ZM11.01 12H9.00001L9.00001 14H11.01V12ZM11.01 16V18H9.00001L9.00001 16H11.01Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 0.719238L23 3.21924L23 22L16 22L16 8C16 6.89543 15.1046 6 14 6H13V0.719238ZM20.5 8H18.5V18H20.5V8Z",
                fill: "currentColor",
            }
        }
    }
}
