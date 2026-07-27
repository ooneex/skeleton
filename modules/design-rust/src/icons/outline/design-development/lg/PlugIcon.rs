use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PlugIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PlugIcon(props: PlugIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m24,39l.0002,6.0002",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m33,3v9",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m15,3v9",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m24,29c1.6569,0,3-1.3431,3-3s-1.3431-3-3-3-3,1.3431-3,3,1.3431,3,3,3Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m5,12v6h4v2.625c.0026,2.8477.8693,5.6247,2.4809,7.9491s3.889,4.0821,6.5191,5.0313v5.3946h12v-5.3946c2.6301-.9492,4.9075-2.7069,6.5191-5.0313s2.4783-5.1014,2.4809-7.9491v-2.625h4v-6H5Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
