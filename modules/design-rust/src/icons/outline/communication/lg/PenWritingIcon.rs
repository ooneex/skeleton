use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PenWritingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PenWritingIcon(props: PenWritingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 43H43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7 36L17.0434 33.1304L36.4644 13.7095C38.417 11.7569 38.417 8.5911 36.4644 6.63847L36.3616 6.53563C34.409 4.58296 31.2431 4.58294 29.2905 6.53559L9.86955 25.9566L7 36Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
