use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DrumsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DrumsIcon(props: DrumsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 42.2422V26.2904",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M24 43V27",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M32 42.2795V26.2803",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M40 39.5V23.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 39.5V23.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M3 17V32.899C3 38.4776 12.402 43 24 43C35.598 43 45 38.4776 45 32.899V17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M38.8578 9.93298C42.653 11.7423 45 14.2406 45 17C45 22.5228 35.598 27 24 27C12.402 27 3 22.5228 3 17C3 14.2406 5.34699 11.7423 9.14223 9.93298",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M32 19L11.0168 3.87256C10.7459 3.67724 10.3645 3.77108 10.2151 4.06981C10.0924 4.31524 10.1725 4.61367 10.4016 4.76468L32 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M32 20C31.4477 20 31 19.5523 31 19C31 18.4477 31.4477 18 32 18C32.5523 18 33 18.4477 33 19C33 19.5523 32.5523 20 32 20Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "M16 19L36.9832 3.87256C37.2541 3.67724 37.6355 3.77108 37.7849 4.06981C37.9076 4.31524 37.8275 4.61367 37.5984 4.76468L16 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 20C16.5523 20 17 19.5523 17 19C17 18.4477 16.5523 18 16 18C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
        }
    }
}
