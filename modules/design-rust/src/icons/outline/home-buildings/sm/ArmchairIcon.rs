use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArmchairIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArmchairIcon(props: ArmchairIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 9L5 5C5 3.89543 5.89543 3 7 3L17 3C18.1046 3 19 3.89543 19 5L19 9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5 19V21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 19V21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5 19L19 19C20.1046 19 21 18.1046 21 17L21 11C21 9.89543 20.1046 9 19 9C17.8954 9 17 9.89543 17 11L17 14L7 14L7 11C7 9.89543 6.10457 9 5 9C3.89543 9 3 9.89543 3 11L3 17C3 18.1046 3.89543 19 5 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
