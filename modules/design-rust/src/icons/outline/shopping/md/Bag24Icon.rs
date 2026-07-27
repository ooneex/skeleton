use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Bag24IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Bag24Icon(props: Bag24IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 13V6C11 3.239 13.239 1 16 1C18.761 1 21 3.239 21 6V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M25.9999 15V9H5.99994V16L3.84792 25.3254C3.41411 27.2053 4.84184 29 6.77109 29H11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 21.1429L15.0469 21.0089C15.468 19.8057 16.6036 19 17.8784 19H18.1704C19.7332 19 21 20.2668 21 21.8296V21.8296C21 22.7434 20.5587 23.6009 19.8151 24.1321L15 27.5714V29H21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M29 29V27V19H28.5816L23 26.6227V27H31",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
