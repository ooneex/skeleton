use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChocoCreamIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChocoCreamIcon(props: ChocoCreamIconProps) -> Element {
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
                d: "M18.3018 7L20.7812 10.1025L21 10.377V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V10.377L3.21875 10.1025L5.69824 7H18.3018ZM6 12V18H18V12H6Z",
                fill: "currentColor",
            }
            path {
                d: "M20 5L4 5L4 1L20 1V5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
