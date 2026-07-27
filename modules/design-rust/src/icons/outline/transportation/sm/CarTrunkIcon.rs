use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CarTrunkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CarTrunkIcon(props: CarTrunkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 16H2V15H3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 19H14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 5H6L9.5 10L8.8 9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 4H15.5038C14.8168 4 14.1778 4.35261 13.8116 4.93386L10.6 10.0312L4.87688 10.3842C3.82212 10.4493 3 11.3237 3 12.3804V17C3 18.1046 3.89543 19 5 19H8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11 22C12.6569 22 14 20.6569 14 19C14 17.3431 12.6569 16 11 16C9.34315 16 8 17.3431 8 19C8 20.6569 9.34315 22 11 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
