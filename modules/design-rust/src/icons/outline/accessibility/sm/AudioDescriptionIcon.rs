use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AudioDescriptionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AudioDescriptionIcon(props: AudioDescriptionIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20,3H4c-1.105,0-2,.895-2,2v10c0,1.105.895,2,2,2h2v5l7-5h7c1.105,0,2-.895,2-2V5c0-1.105-.895-2-2-2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            polyline {
                points: "5.6 13 5.5 13 7.5 7 9 7 11 13 10.9 13",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m14,7h2.5c1.104,0,2,.896,2,2v2c0,1.104-.896,2-2,2h-2.5v-6h0Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "5.833",
                y1: "12",
                x2: "10.667",
                y2: "12",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
        }
    }
}
