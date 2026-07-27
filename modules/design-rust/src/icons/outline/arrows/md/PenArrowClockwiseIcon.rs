use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PenArrowClockwiseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PenArrowClockwiseIcon(props: PenArrowClockwiseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 2.5C23.4558 2.5 29.5 8.54415 29.5 16C29.5 23.4558 23.4558 29.5 16 29.5C8.54416 29.5 2.5 23.4558 2.5 16C2.5 10.9006 5.32737 6.46153 9.5 4.16497L9.40917 4.21542",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M2.5 3.5L9.5 3.5L9.5 10.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.4297 21.1663L21.2981 14.298C22.2911 13.305 22.2911 11.695 21.2981 10.702C20.3051 9.70904 18.6951 9.70904 17.7021 10.702L10.8338 17.5703L10.5 21.5L14.4297 21.1663Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
