use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EnvelopeOpenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EnvelopeOpenIcon(props: EnvelopeOpenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polyline {
                points: "1 9 12.001 17 23 9",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
                "data-color": "color-2",
            }
            path {
                d: "M11.999,1L1,9v12c0,1.105,.895,2,2,2H21c1.105,0,2-.895,2-2V9L11.999,1Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
