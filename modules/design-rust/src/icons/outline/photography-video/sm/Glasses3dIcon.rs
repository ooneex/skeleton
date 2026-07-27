use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Glasses3dIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Glasses3dIcon(props: Glasses3dIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M1 10H23",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4 13H8V16H4V13Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M16 13H20V16H16V13Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M6.5 5V5C6.30307 4.21227 5.2737 4.01682 4.80175 4.67755L1 10V18.5L9.5 19L10.333 17.0285C10.616 16.3585 11.2727 15.9231 12 15.9231V15.9231C12.7273 15.9231 13.384 16.3585 13.667 17.0285L14.5 19L23 18.5V10L19.1983 4.67755C18.7263 4.01682 17.6969 4.21227 17.5 5V5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
