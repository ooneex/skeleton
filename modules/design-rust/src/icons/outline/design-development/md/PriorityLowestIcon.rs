use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PriorityLowestIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PriorityLowestIcon(props: PriorityLowestIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M28.9636 18.1212L18.1213 28.9635C16.9497 30.1351 15.0503 30.1351 13.8787 28.9635L3.03638 18.1212C1.8648 16.9496 1.86481 15.0501 3.03638 13.8786L13.8787 3.03626C15.0503 1.86468 16.9497 1.86468 18.1213 3.03626L28.9636 13.8786C30.1352 15.0501 30.1352 16.9496 28.9636 18.1212Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11.5 18L16 22.5L20.5 18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M11.5 12L16 16.5L20.5 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
