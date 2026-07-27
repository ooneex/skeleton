use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BookOpen2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BookOpen2Icon(props: BookOpen2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 20.25V20.5V4.75V5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 20.4999C15.5002 18.4997 19.4998 18.4997 23 20.4999V4.99993C19.4998 2.9997 15.5002 2.9997 12 4.99993C8.49975 2.9997 4.50025 2.99987 1 5.0001V20.4999C4.50025 18.4997 8.49975 18.4997 12 20.4999Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
