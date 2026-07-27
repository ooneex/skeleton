use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UsersSeparationIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UsersSeparationIcon(props: UsersSeparationIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m5,6h0c-.828,0-1.5-.672-1.5-1.5h0c0-.828.672-1.5,1.5-1.5h0c.828,0,1.5.672,1.5,1.5h0c0,.828-.672,1.5-1.5,1.5Z",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            path {
                d: "m3.5,21l-.5-5.5-1.5-1,.658-4.384c.057-.377.319-.704.686-.808,1.438-.41,2.876-.41,4.313,0,.367.105.629.431.686.808l.658,4.384-1.5,1-.5,5.5h-3Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m19,6h0c.828,0,1.5-.672,1.5-1.5h0c0-.828-.672-1.5-1.5-1.5h0c-.828,0-1.5.672-1.5,1.5h0c0,.828.672,1.5,1.5,1.5Z",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            path {
                d: "m20.5,21l.5-5.5,1.5-1-.658-4.384c-.057-.377-.319-.704-.686-.808-1.438-.41-2.876-.41-4.313,0-.367.105-.629.431-.686.808l-.658,4.384,1.5,1,.5,5.5h3Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "12",
                y1: "2",
                x2: "12",
                y2: "22",
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
