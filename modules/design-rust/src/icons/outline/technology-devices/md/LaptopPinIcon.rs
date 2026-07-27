use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LaptopPinIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LaptopPinIcon(props: LaptopPinIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 19V7C4 5.34315 5.34315 4 7 4H16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M2 23V26C2 27.1046 2.89543 28 4 28H28C29.1046 28 30 27.1046 30 26V23H21C21 23.5523 20.5523 24 20 24H12C11.4477 24 11 23.5523 11 23H2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 18C27.492 15.6222 30 12.9155 30 9.74359C30 6.57169 27.3135 4 24 4C20.6865 4 18 6.57169 18 9.74359C18 12.9155 20.508 15.6222 24 18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 11.5C24.8284 11.5 25.5 10.8284 25.5 10C25.5 9.17157 24.8284 8.5 24 8.5C23.1716 8.5 22.5 9.17157 22.5 10C22.5 10.8284 23.1716 11.5 24 11.5Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
