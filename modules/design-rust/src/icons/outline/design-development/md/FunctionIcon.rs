use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FunctionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FunctionIcon(props: FunctionIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6 12H18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 29.5V29.5C6.85527 30.2138 9.70252 28.3058 10.1279 25.3935L12.8721 6.60654C13.2975 3.6943 16.1447 1.7863 19 2.50012V2.50012",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20 30V30C20.6321 30 21.2299 29.7127 21.6247 29.2191L28.3753 20.7809C28.7701 20.2873 29.3679 20 30 20V20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M29 30V30C28.1793 30 27.4254 29.5477 27.0392 28.8235L22.9607 21.1765C22.5745 20.4523 21.8206 20 20.9999 20V20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
