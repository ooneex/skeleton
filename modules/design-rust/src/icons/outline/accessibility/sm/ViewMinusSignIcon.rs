use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ViewMinusSignIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ViewMinusSignIcon(props: ViewMinusSignIconProps) -> Element {
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
                cy: "9",
                r: "5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m19.476,15c2.209-1.898,3.383-4,3.383-4,0,0-3.859-7-10.859-7S1.141,11,1.141,11c0,0,3.205,5.78,9.055,6.824",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "14",
                y1: "19",
                x2: "22",
                y2: "19",
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
