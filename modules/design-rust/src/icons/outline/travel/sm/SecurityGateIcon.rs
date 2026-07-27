use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SecurityGateIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SecurityGateIcon(props: SecurityGateIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m12,8h0c-.829,0-1.5-.671-1.5-1.5h0c0-.829.671-1.5,1.5-1.5h0c.829,0,1.5.671,1.5,1.5h0c0,.829-.671,1.5-1.5,1.5Z",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            polyline {
                points: "3 22 3 2 21 2 21 22",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m13.75,22h-3.5l-.25-5-2-1,.901-3.603c.064-.255.223-.483.449-.617,1.767-1.041,3.534-1.041,5.301,0,.226.133.385.362.449.617l.901,3.603-2,1-.25,5Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
