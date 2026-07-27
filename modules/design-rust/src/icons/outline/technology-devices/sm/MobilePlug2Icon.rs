use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MobilePlug2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MobilePlug2Icon(props: MobilePlug2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 18V22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8 22L7.00002 22C5.89545 22 5.00001 21.1046 5.00001 20L5.00002 4C5.00002 2.89543 5.89545 2 7.00002 2L17 2C18.1046 2 19 2.89543 19 4L19 20C19 21.1046 18.1046 22 17 22L16 22",
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
                d: "M10 13L10 10.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 13L14 10.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9 13L9 15C9 16.6569 10.3431 18 12 18C13.6569 18 15 16.6569 15 15L15 13L9 13Z",
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
