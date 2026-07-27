use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareGrid3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareGrid3Icon(props: SquareGrid3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "7",
                y: "7",
                width: "1",
                height: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "round",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "16",
                y: "7",
                width: "1",
                height: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "round",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "11.5",
                y: "7",
                width: "1",
                height: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "round",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "7",
                y: "11.5",
                width: "1",
                height: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "round",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "16",
                y: "11.5",
                width: "1",
                height: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "round",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "11.5",
                y: "11.5",
                width: "1",
                height: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "round",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "7",
                y: "16",
                width: "1",
                height: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "round",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "16",
                y: "16",
                width: "1",
                height: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "round",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "11.5",
                y: "16",
                width: "1",
                height: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "round",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m19,21H5c-1.105,0-2-.895-2-2V5c0-1.105.895-2,2-2h14c1.105,0,2,.895,2,2v14c0,1.105-.895,2-2,2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "round",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
