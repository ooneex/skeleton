use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileTsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileTsIcon(props: FileTsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8.5 22V15M8.5 15H11M8.5 15L6 15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4 11L4 4C4 2.89543 4.89543 2 6 2L13 2L20 9L20 11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 2V9H20",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M18 15H15.75C14.7835 15 14 15.7835 14 16.75V16.75C14 17.7165 14.7835 18.5 15.75 18.5H17.25C18.2165 18.5 19 19.2835 19 20.25V20.25C19 21.2165 18.2165 22 17.25 22H15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
