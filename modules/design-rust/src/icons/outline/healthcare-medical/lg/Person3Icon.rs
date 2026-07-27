use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Person3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Person3Icon(props: Person3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 37.5L17.5334 20.2748C18.1632 17.2042 20.8655 15 24 15C27.1345 15 29.8368 17.2042 30.4666 20.2748L34 37.5L29.5 39L28.5 46L19.5 46L18.5 39L14 37.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 11C26.4853 11 28.5 8.98528 28.5 6.5C28.5 4.01472 26.4853 2 24 2C21.5147 2 19.5 4.01472 19.5 6.5C19.5 8.98528 21.5147 11 24 11Z",
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
