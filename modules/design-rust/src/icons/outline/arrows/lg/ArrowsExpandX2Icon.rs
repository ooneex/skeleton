use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsExpandX2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsExpandX2Icon(props: ArrowsExpandX2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M44 24L4 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M31.2721 36.7279L44 24L31.2721 11.2721",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16.7279 36.7279L4 24L16.7279 11.2721",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
