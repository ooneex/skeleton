use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleCheck2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleCheck2Icon(props: CircleCheck2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polyline {
                points: "7 11 11 15 21 3",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m15.949,2.813c-1.212-.522-2.546-.813-3.949-.813C6.477,2,2,6.477,2,12s4.477,10,10,10,10-4.477,10-10c0-1.15-.204-2.25-.561-3.279",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
