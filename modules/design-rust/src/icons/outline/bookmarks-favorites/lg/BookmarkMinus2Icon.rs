use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BookmarkMinus2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BookmarkMinus2Icon(props: BookmarkMinus2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M37 11V8C37 5.23858 34.7614 3 32 3H8C5.23858 3 3 5.23858 3 8L3 44L20 34L37 44V34",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M37 29C41.9706 29 46 24.9706 46 20C46 15.0294 41.9706 11 37 11C32.0294 11 28 15.0294 28 20C28 24.9706 32.0294 29 37 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M33 20H41",
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
