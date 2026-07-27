use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileMdIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileMdIcon(props: FileMdIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 20V29H21.5C23.9853 29 26 26.9853 26 24.5C26 22.0147 23.9853 20 21.5 20H19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7 29V20H8L11 24.3333L14 20H15V29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13 2V11H4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4 16V11.2426C4 10.447 4.31607 9.68393 4.87868 9.12132L11.1213 2.87868C11.6839 2.31607 12.447 2 13.2426 2H25C26.6569 2 28 3.34315 28 5V16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
