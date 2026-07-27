use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DotsVerticalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DotsVerticalIcon(props: DotsVerticalIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22.5 24C22.5 24.8284 23.1716 25.5 24 25.5C24.8284 25.5 25.5 24.8284 25.5 24C25.5 23.1716 24.8284 22.5 24 22.5C23.1716 22.5 22.5 23.1716 22.5 24Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
            path {
                d: "M22.5 39.5C22.5 40.3284 23.1716 41 24 41C24.8284 41 25.5 40.3284 25.5 39.5C25.5 38.6716 24.8284 38 24 38C23.1716 38 22.5 38.6716 22.5 39.5Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
            }
            path {
                d: "M22.5 8.5C22.5 9.32843 23.1716 10 24 10C24.8284 10 25.5 9.32843 25.5 8.5C25.5 7.67157 24.8284 7 24 7C23.1716 7 22.5 7.67157 22.5 8.5Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
            }
        }
    }
}
