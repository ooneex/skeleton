use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NetworkNodesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NetworkNodesIcon(props: NetworkNodesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 18L14 27",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5 14L14 5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M27 18L18 27",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M27 14L18 5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 6C17.3807 6 18.5 4.88071 18.5 3.5C18.5 2.11929 17.3807 1 16 1C14.6193 1 13.5 2.11929 13.5 3.5C13.5 4.88071 14.6193 6 16 6Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 18.5C17.3807 18.5 18.5 17.3807 18.5 16C18.5 14.6193 17.3807 13.5 16 13.5C14.6193 13.5 13.5 14.6193 13.5 16C13.5 17.3807 14.6193 18.5 16 18.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 31C17.3807 31 18.5 29.8807 18.5 28.5C18.5 27.1193 17.3807 26 16 26C14.6193 26 13.5 27.1193 13.5 28.5C13.5 29.8807 14.6193 31 16 31Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M26 16C26 17.3807 27.1193 18.5 28.5 18.5C29.8807 18.5 31 17.3807 31 16C31 14.6193 29.8807 13.5 28.5 13.5C27.1193 13.5 26 14.6193 26 16Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M1 16C1 17.3807 2.11929 18.5 3.5 18.5C4.88071 18.5 6 17.3807 6 16C6 14.6193 4.88071 13.5 3.5 13.5C2.11929 13.5 1 14.6193 1 16Z",
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
