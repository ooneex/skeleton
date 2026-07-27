use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PulseChartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PulseChartIcon(props: PulseChartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 4H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 28H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 16.0001C9 16.8285 8.32843 17.5001 7.5 17.5001C6.67157 17.5001 6 16.8285 6 16.0001C6 15.1716 6.67157 14.5001 7.5 14.5001C8.32843 14.5001 9 15.1716 9 16.0001Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M13 11.5C13 12.3284 12.3284 13 11.5 13C10.6716 13 10 12.3284 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M17.5 16C17.5 16.8284 16.8284 17.5 16 17.5C15.1716 17.5 14.5 16.8284 14.5 16C14.5 15.1716 15.1716 14.5 16 14.5C16.8284 14.5 17.5 15.1716 17.5 16Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            circle {
                cx: "20.5",
                cy: "20.5",
                r: "1.5",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M26 16C26 16.8284 25.3284 17.5 24.5 17.5C23.6716 17.5 23 16.8284 23 16C23 15.1716 23.6716 14.5 24.5 14.5C25.3284 14.5 26 15.1716 26 16Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            circle {
                cx: "28.5",
                cy: "11.5",
                r: "1.5",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            circle {
                cx: "3.5",
                cy: "20.5",
                r: "1.5",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
