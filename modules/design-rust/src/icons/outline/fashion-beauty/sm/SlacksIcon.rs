use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SlacksIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SlacksIcon(props: SlacksIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 11L8 10V6",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M20 11L16 10V6",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4 6H20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                fill: "none",
            }
            path {
                d: "M12 6V2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20 22H14L12.5 12H11.5L10 22H4V2H20V22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                fill: "none",
            }
        }
    }
}
