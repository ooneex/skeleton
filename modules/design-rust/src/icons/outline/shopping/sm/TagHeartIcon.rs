use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TagHeartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TagHeartIcon(props: TagHeartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 3H3V12.5L11.9138 21.4138C12.6948 22.1948 13.9612 22.1948 14.7422 21.4138L21.5 14.656C22.2334 13.9226 22.2334 12.7334 21.5 12V12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8.5 9C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8C8.22386 8 8 8.22386 8 8.5C8 8.77614 8.22386 9 8.5 9Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                "data-color": "color-2",
            }
            path {
                d: "M18 9.5C19.109 9 23 6.229 23 3.689C23 2.204 21.794 1 20.308 1C19.328 1 18.596 1.614 18 2.303C17.405 1.613 16.672 1 15.692 1C14.205 1 13 2.204 13 3.689C13 6.229 16.891 9 18 9.5Z",
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
