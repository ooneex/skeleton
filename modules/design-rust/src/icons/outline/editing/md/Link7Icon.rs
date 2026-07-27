use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link7IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link7Icon(props: Link7IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 13V10C9 6.13401 12.134 3 16 3V3C19.866 3 23 6.13401 23 10V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 19V22C9 25.866 12.134 29 16 29V29C19.866 29 23 25.866 23 22V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 11L16 21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
