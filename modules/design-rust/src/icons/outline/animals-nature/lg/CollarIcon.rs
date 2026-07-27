use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CollarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CollarIcon(props: CollarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18.189 12.5C18.189 12.1593 18.083 13 18.083 13C18.559 10.1623 21.027 8 24 8M24 29C20.6863 29 18 26.3137 18 23L18.0114 23.3734",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M24 46C28.1421 46 31.5 42.6421 31.5 38.5C31.5 34.3579 28.1421 31 24 31C19.8579 31 16.5 34.3579 16.5 38.5C16.5 42.6421 19.8579 46 24 46Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 8V18C3 20.7614 12.402 23 24 23C35.598 23 45 20.7614 45 18V8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 13C35.598 13 45 10.7614 45 8C45 5.23858 35.598 3 24 3C12.402 3 3 5.23858 3 8C3 10.7614 12.402 13 24 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 8C27.3137 8 30 10.6863 30 14V23C30 26.3137 27.3137 29 24 29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
        }
    }
}
