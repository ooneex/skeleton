use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextTitleCaseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextTitleCaseIcon(props: TextTitleCaseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M44 14V37.5836C44 41.6796 40.61 45 36.5141 45V45C33.7732 45 31.2257 43.4515 30 41V41",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M28 22V26C28 30.4183 31.5817 34 36 34C40.4183 34 44 30.4183 44 26V22C44 17.5817 40.4183 14 36 14C31.5817 14 28 17.5817 28 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7 25H21",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4.09012 34H4L13.375 6H14H14.625L24 34H23.9035",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
