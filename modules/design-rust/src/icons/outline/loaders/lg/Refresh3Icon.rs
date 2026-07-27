use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Refresh3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Refresh3Icon(props: Refresh3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M35.9208 9L36.568 8.44131C33.1336 5.66364 28.7611 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C34.3707 44 42.8978 36.1066 43.9012 26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M31.2012 13.0741L36.5 8.5L41.7988 3.9259L43.6875 16.8268L31.2012 13.0741Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
