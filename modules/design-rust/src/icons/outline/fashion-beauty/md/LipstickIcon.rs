use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LipstickIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LipstickIcon(props: LipstickIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 16V4.36535L20 4.68616",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 16V7.00698V7.26363",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9.00001 27C9.00002 28.6569 10.3432 30 12 30H20C21.6568 30 23 28.6569 23 27L23 20H9L9.00001 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19.4643 2.79026C20.5696 4.09089 19.9159 6.46225 18.0043 8.08682C16.0926 9.71139 13.6469 9.97398 12.5416 8.67335C11.4363 7.37271 12.0843 5.1031 13.996 3.47853C15.9076 1.85396 18.359 1.48962 19.4643 2.79026Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M13 24H19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
