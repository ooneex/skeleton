use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SmartHomeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SmartHomeIcon(props: SmartHomeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 13L16 2L30 13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M5 16V26C5 27.6569 6.34315 29 8 29H24C25.6569 29 27 27.6569 27 26V16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20.4246 19.5754C19.2187 18.5906 17.6783 18 16 18C14.3217 18 12.7813 18.5906 11.5754 19.5754",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.4381 22.4381L16 24L17.5618 22.4381C17.1069 22.1602 16.5721 22 16 22C15.4278 22 14.8931 22.1602 14.4381 22.4381Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8.73782 16.7378C10.6752 15.0336 13.2169 14 16 14C18.7831 14 21.3248 15.0336 23.2622 16.7378",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
