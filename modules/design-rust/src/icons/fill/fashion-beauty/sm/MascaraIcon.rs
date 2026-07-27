use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MascaraIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MascaraIcon(props: MascaraIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 2V4H3V2H10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M10 6V8H3V6H10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M5.5 0H7.5V12H5.5V0Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M22 17H13V7H22V17Z",
                fill: "currentColor",
            }
            path {
                d: "M22 20C22 21.1046 21.1046 22 20 22H15C13.8954 22 13 21.1046 13 20V19H22V20Z",
                fill: "currentColor",
            }
            path {
                d: "M11 20C11 21.1046 10.1046 22 9 22H4C2.89544 22 2 21.1046 2 20V14H11V20Z",
                fill: "currentColor",
            }
        }
    }
}
