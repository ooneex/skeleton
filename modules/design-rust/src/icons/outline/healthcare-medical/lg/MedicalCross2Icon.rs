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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "5",
                y: "5",
                width: "38",
                height: "38",
                rx: "5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M20 20L20 12H28L28 20H36L36 28H28V36H20V28H12L12 20H20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
