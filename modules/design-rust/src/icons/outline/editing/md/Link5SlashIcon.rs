use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link5SlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link5SlashIcon(props: Link5SlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "18.828",
                y1: "18.828",
                x2: "21",
                y2: "21",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "11",
                y1: "11",
                x2: "16",
                y2: "16",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "2",
                y1: "30",
                x2: "30",
                y2: "2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m14.301,23.355c.143.301.328.588.577.837l4.95,4.95c1.172,1.172,3.071,1.172,4.243,0l5.071-5.071c1.172-1.172,1.172-3.071,0-4.243l-4.95-4.95c-.249-.249-.536-.434-.837-.577",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m17.699,8.645c-.143-.301-.328-.588-.577-.837l-4.95-4.95c-1.172-1.172-3.071-1.172-4.243,0L2.858,7.929c-1.172,1.172-1.172,3.071,0,4.243l4.95,4.95c.249.249.536.434.837.577",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
