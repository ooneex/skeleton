use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Newspaper2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Newspaper2Icon(props: Newspaper2IconProps) -> Element {
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
                d: "M3 4C3 2.34315 4.34315 1 6 1H18C19.6569 1 21 2.34315 21 4L21 17H24L24 20C24 21.6569 22.6569 23 21 23H6.5C4.567 23 3 21.433 3 19.5V4ZM5 19.5C5 20.3284 5.67157 21 6.5 21C7.32843 21 8 20.3284 8 19.5V17H19L19 4C19 3.44772 18.5523 3 18 3L6 3C5.44772 3 5 3.44772 5 4L5 19.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 11H17V13H7V11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 7H12V9H7V7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 7H17V9H14V7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
