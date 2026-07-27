use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Microphone5IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Microphone5Icon(props: Microphone5IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.5 4.5L15.6211 5.34799C16.4382 11.0677 20.9323 15.5618 26.652 16.3789L27.5 16.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M13.2891 12.7578L4.5 23.5L8.5 27.5L19.2013 18.7444",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4.49999 29.5L3.5 28.5L2.5 27.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21.5001 19C26.1945 19 30.0001 15.1945 30.0001 10.5C30.0001 5.80561 26.1945 2.00003 21.5001 2.00003C16.8056 2.00003 13.0001 5.80561 13.0001 10.5C13.0001 15.1945 16.8056 19 21.5001 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
