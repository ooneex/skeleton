use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MedicalCross2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MedicalCross2Icon(props: MedicalCross2IconProps) -> Element {
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
                width: "18",
                height: "18",
                rx: "2",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M10 10L10 7H14L14 10H17L17 14H14L14 17H10L10 14H7.00001L7 10H10Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
