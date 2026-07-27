use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Jeans2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Jeans2Icon(props: Jeans2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 23H4V20H10.3457L10 23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M20 23H14L13.6543 20H20V23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 1V6H19C17.8954 6 17 5.10457 17 4V3H15V4C15 6.20914 16.7909 8 19 8H20V18H13.4229L12.5 10H11.5L10.5771 18H4V8H5C7.20914 8 9 6.20914 9 4V3H7V4C7 5.10457 6.10457 6 5 6H4V1H20ZM11 3V6H13V3H11Z",
                fill: "currentColor",
            }
        }
    }
}
