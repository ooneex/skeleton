use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RadioCheckedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RadioCheckedIcon(props: RadioCheckedIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "16",
                cy: "16",
                r: "14",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            circle {
                cx: "16",
                cy: "16",
                r: "6",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-stroke": "none",
                "data-cap": "butt",
            }
        }
    }
}
