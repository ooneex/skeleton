use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GridPlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GridPlusIcon(props: GridPlusIconProps) -> Element {
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
                d: "M4 17.5C4 19.433 5.567 21 7.5 21H17.5C19.433 21 21 19.433 21 17.5V7.5C21 5.567 19.433 4 17.5 4H7.5C5.567 4 4 5.567 4 7.5V17.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 40.5C4 42.433 5.567 44 7.5 44H17.5C19.433 44 21 42.433 21 40.5V30.5C21 28.567 19.433 27 17.5 27H7.5C5.567 27 4 28.567 4 30.5V40.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 17.5C27 19.433 28.567 21 30.5 21H40.5C42.433 21 44 19.433 44 17.5V7.5C44 5.567 42.433 4 40.5 4H30.5C28.567 4 27 5.567 27 7.5V17.5Z",
                fill: "currentColor",
            }
            path {
                d: "M37 34V27H34V34L27 34V37L34 37V44H37V37L44 37V34L37 34Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
