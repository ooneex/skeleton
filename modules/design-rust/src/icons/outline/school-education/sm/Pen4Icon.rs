use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pen4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pen4Icon(props: Pen4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.5 14.1602L9.8398 19.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M13.2345 5.53918L18.4783 10.783",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M9.00006 20.2337L20.9394 8.29438C21.5252 7.70859 21.5252 6.75883 20.9394 6.17305L17.8269 3.06065C17.2411 2.47487 16.2914 2.47488 15.7056 3.06066L3.76624 15L3.00328 21L9.00006 20.2337Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
