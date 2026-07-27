use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct InputPasswordCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InputPasswordCheckIcon(props: InputPasswordCheckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "12",
                cy: "11",
                r: "1.25",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "7.25",
                cy: "11",
                r: "1.25",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "16.75",
                cy: "11",
                r: "1.25",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            path {
                d: "m22,10v-3c0-1.105-.895-2-2-2H4c-1.105,0-2,.895-2,2v8c0,1.105.895,2,2,2h5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            polyline {
                points: "13 18 15.5 20.5 22 14",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
