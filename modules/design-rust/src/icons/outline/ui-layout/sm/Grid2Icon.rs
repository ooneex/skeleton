use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Grid2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Grid2Icon(props: Grid2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "3",
                y: "3",
                width: "7",
                height: "7",
                rx: "1",
                ry: "1",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            rect {
                x: "14.5",
                y: "3",
                width: "6.5",
                height: "6.5",
                rx: "1",
                ry: "1",
                transform: "translate(.779 14.382) rotate(-45)",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "14",
                y: "14",
                width: "7",
                height: "7",
                rx: "1",
                ry: "1",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            rect {
                x: "3",
                y: "14",
                width: "7",
                height: "7",
                rx: "1",
                ry: "1",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
