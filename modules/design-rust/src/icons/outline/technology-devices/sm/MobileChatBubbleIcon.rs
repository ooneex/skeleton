use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MobileChatBubbleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MobileChatBubbleIcon(props: MobileChatBubbleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 7L19 4C19 2.89543 18.1046 2 17 2L7 2C5.89543 2 5 2.89543 5 4L5 20C5 21.1046 5.89543 22 7 22L8 22",
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
                d: "M13 11H22C22.5523 11 23 11.4477 23 12V18C23 18.5523 22.5523 19 22 19H15L12 21V12C12 11.4477 12.4477 11 13 11Z",
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
