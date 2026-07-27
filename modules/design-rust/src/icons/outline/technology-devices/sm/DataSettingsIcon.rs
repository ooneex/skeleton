use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DataSettingsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DataSettingsIcon(props: DataSettingsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polyline {
                points: "9 19 2.25 19 18 2.5 18 9",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            circle {
                cx: "18",
                cy: "18",
                r: "3.75",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            polyline {
                points: "17.449 14.29 17.812 13 18.187 13 18.551 14.29",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            polyline {
                points: "20.234 14.987 21.403 14.332 21.668 14.597 21.013 15.766",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            polyline {
                points: "21.71 17.449 23 17.812 23 18.187 21.71 18.551",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            polyline {
                points: "21.013 20.234 21.668 21.403 21.403 21.668 20.234 21.013",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            polyline {
                points: "18.551 21.71 18.188 23 17.813 23 17.449 21.71",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            polyline {
                points: "15.766 21.013 14.597 21.668 14.332 21.403 14.987 20.234",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            polyline {
                points: "14.29 18.551 13 18.188 13 17.813 14.29 17.449",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            polyline {
                points: "14.987 15.766 14.332 14.597 14.597 14.332 15.766 14.987",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
        }
    }
}
