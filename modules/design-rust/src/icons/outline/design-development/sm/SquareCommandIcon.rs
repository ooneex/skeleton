use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareCommandIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareCommandIcon(props: SquareCommandIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m19,21H5c-1.105,0-2-.895-2-2V5c0-1.105.895-2,2-2h14c1.105,0,2,.895,2,2v14c0,1.105-.895,2-2,2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            rect {
                x: "10",
                y: "10",
                width: "4",
                height: "4",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m8,6c-1.105,0-2,.895-2,2s.895,2,2,2h2v-2c0-1.105-.895-2-2-2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m16,6c1.105,0,2,.895,2,2,0,1.105-.895,2-2,2h-2s0-2,0-2c0-1.105.895-2,2-2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m8,18c-1.105,0-2-.895-2-2s.895-2,2-2h2v2c0,1.105-.895,2-2,2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m16,18c1.105,0,2-.895,2-2,0-1.105-.895-2-2-2h-2s0,2,0,2c0,1.105.895,2,2,2Z",
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
