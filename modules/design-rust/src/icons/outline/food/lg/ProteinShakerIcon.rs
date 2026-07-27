use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ProteinShakerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ProteinShakerIcon(props: ProteinShakerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18 6V2.55643C18 2.25921 18.2577 2.02761 18.5533 2.05928L24.5533 2.70214C24.8073 2.72936 25 2.94377 25 3.19929V6",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M35.5 12L34.3787 7.51493C34.1561 6.62459 33.3562 6 32.4384 6H15.5616C14.6438 6 13.8439 6.62459 13.6213 7.51493L12.5 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12.9231 17H12L14 45H34L36 17H35.0769",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M39 12H9V17H39V12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 25L21 31H24H27L24 37",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
