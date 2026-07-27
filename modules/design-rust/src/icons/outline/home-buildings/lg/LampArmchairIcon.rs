use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LampArmchairIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LampArmchairIcon(props: LampArmchairIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25 39V41H26.4L27.5 39",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M42 39V41H40.6L39.5 39",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M3.5 17H18.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M25 26L25 20.5C25 19.1193 26.1193 18 27.5 18L39.5 18C40.8807 18 42 19.1193 42 20.5L42 26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M11 22V41",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19.2762 19.4532L15.7368 7L11.4737 7L6.26316 7L2.72382 19.4532C2.36087 20.7303 3.32003 22 4.64763 22L17.3524 22C18.68 22 19.6391 20.7303 19.2762 19.4532Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6 41H16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24.5 39L42.5 39C43.8807 39 45 37.8807 45 36.5L45 29C45 27.3431 43.6569 26 42 26C40.3431 26 39 27.3431 39 29L39 33L28 33L28 29C28 27.3431 26.6569 26 25 26C23.3431 26 22 27.3431 22 29L22 36.5C22 37.8807 23.1193 39 24.5 39Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
