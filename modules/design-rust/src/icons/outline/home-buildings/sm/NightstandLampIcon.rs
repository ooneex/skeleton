use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NightstandLampIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NightstandLampIcon(props: NightstandLampIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 8L12 14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M5 20V22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19 20V22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 14L10 16L14 16L14 14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3.5 20L20.5 20C21.3284 20 22 19.3284 22 18.5L22 15.5C22 14.6716 21.3284 14 20.5 14L3.5 14C2.67157 14 2 14.6716 2 15.5L2 18.5C2 19.3284 2.67157 20 3.5 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16.8179 7.36264L15 1L12 1L9 1L7.1821 7.36264C7.09084 7.68205 7.33068 8 7.66287 8L16.3371 8C16.6693 8 16.9092 7.68205 16.8179 7.36264Z",
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
