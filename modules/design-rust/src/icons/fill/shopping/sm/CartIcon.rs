use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CartIcon(props: CartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "6",
                cy: "21",
                r: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "20",
                cy: "21",
                r: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m18.36,17H7.734c-1.483,0-2.76-1.107-2.97-2.575L3.133,3H0V1h4.867l.571,4h17.781l-1.918,9.589c-.278,1.396-1.516,2.411-2.941,2.411Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
