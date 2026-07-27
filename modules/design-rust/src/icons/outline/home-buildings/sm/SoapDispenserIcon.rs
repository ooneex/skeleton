use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SoapDispenserIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SoapDispenserIcon(props: SoapDispenserIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.45447 18H17.4607",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 6L14 2L8 2L8 6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8 2H19C20.1046 2 21 2.89543 21 4V4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.2344 6L7.76557 6C6.75692 6 5.90612 6.75107 5.78101 7.75193L4.28101 19.7519C4.1318 20.9456 5.06257 22 6.26556 22L15.7344 22C16.9374 22 17.8682 20.9456 17.719 19.7519L16.219 7.75193C16.0939 6.75107 15.2431 6 14.2344 6Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 8C21.5194 8.41667 22 9.04167 22 9.57853C22 10.1449 21.5523 10.5 21 10.5C20.4477 10.5 20 10.1449 20 9.57853C20 9.04167 20.486 8.41667 21 8Z",
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
