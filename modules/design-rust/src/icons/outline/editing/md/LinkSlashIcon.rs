use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LinkSlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LinkSlashIcon(props: LinkSlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m13.878,23.778l3.672,3.672c2.734,2.734,7.166,2.734,9.899,0,0,0,0,0,0,0h0c2.734-2.734,2.734-7.166,0-9.899,0,0,0,0,0,0l-2.55-2.55",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m15.698,11.456c-.977.347-1.865.909-2.598,1.644h0c-2.003,2.003-2.538,4.917-1.607,7.407l.59-.59",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m7.1,17l-2.55-2.55s0,0,0,0c-2.734-2.734-2.733-7.166,0-9.899h0s0,0,0,0c2.734-2.734,7.166-2.733,9.899,0l4.45,4.45h0c.731.732,1.266,1.584,1.606,2.493l-.59.59",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
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
        }
    }
}
