use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MobileIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MobileIcon(props: MobileIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.99999 4L4.99999 20C4.99999 21.1046 5.89542 22 6.99999 22L17 22C18.1046 22 19 21.1046 19 20L19 4C19 2.89543 18.1046 2 17 2L6.99999 2C5.89542 2 4.99999 2.89543 4.99999 4Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13.4397 5.12062L10.5603 5.12062C10.527 5.12062 10.5 5.09362 10.5 5.06031C10.5 5.027 10.527 5 10.5603 5L13.4397 5C13.473 5 13.5 5.027 13.5 5.06031C13.5 5.09362 13.473 5.12062 13.4397 5.12062Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 18H14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
