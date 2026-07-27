use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SsdIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SsdIcon(props: SsdIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M45 36L45 12C45 9.2386 42.7614 7.00002 40 7.00002L8 7.00002C5.23857 7.00002 3 9.2386 3 12L3 36C3 38.7614 5.23858 41 8 41L40 41C42.7614 41 45 38.7614 45 36Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M34 28L34 20L14 20L14 28L34 28Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 14C8 15.1046 8.89543 16 10 16C11.1046 16 12 15.1046 12 14C12 12.8954 11.1046 12 10 12C8.89543 12 8 12.8954 8 14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M36 14C36 15.1046 36.8954 16 38 16C39.1046 16 40 15.1046 40 14C40 12.8954 39.1046 12 38 12C36.8954 12 36 12.8954 36 14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8 34C8 35.1046 8.89543 36 10 36C11.1046 36 12 35.1046 12 34C12 32.8954 11.1046 32 10 32C8.89543 32 8 32.8954 8 34Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M36 34C36 35.1046 36.8954 36 38 36C39.1046 36 40 35.1046 40 34C40 32.8954 39.1046 32 38 32C36.8954 32 36 32.8954 36 34Z",
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
