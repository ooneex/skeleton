use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileCodeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileCodeIcon(props: FileCodeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 3V16H7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M22 45H12C9.23858 45 7 42.7699 7 40.0084C7 32.8718 7 20.4779 7 16.2381C7 15.4424 7.31607 14.6839 7.87868 14.1213L18.1213 3.87868C18.6839 3.31607 19.447 3 20.2426 3H36C38.7614 3 41 5.23525 41 7.99667C41 13.3448 41 21.3985 41 29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M29.5 44.5L24 39L29.5 33.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M38.5 44.5L44 39L38.5 33.5",
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
