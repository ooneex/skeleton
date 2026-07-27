use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WindshieldCleanerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WindshieldCleanerIcon(props: WindshieldCleanerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 9.23065C18.0235 9.46477 20.0313 9.87712 22 10.4677V22.4677C15.4769 20.5108 8.52306 20.5108 2 22.4677V10.4677C3.96865 9.87712 5.97655 9.46477 8 9.23065",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 3V14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6 5V4C6 2.34315 7.34315 1 9 1V1C10.6569 1 12 2.34315 12 4V4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 4V4C12 2.34315 13.3431 1 15 1V1C16.6569 1 18 2.34315 18 4V5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
