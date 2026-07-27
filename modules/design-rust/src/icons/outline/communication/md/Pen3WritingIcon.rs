use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pen3WritingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pen3WritingIcon(props: Pen3WritingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 6.5L24.6569 12.1569C25.8284 13.3284 25.8284 15.2279 24.6569 16.3995L21.4749 19.5815",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3 29H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5.5 24.5457L11.5457 23.4497L25.9311 9.06429C27.3394 7.65605 27.3729 5.40641 26.0061 4.03957C24.6393 2.67274 22.3896 2.7063 20.9814 4.11455L6.59593 18.5L5.5 24.5457Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
