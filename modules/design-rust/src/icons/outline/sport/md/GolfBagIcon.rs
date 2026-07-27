use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GolfBagIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GolfBagIcon(props: GolfBagIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 24V30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23 24V30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18 19V6.40085C18 5.55984 18.5261 4.80868 19.3165 4.52127L26.3165 1.97581C27.6209 1.5015 29 2.46747 29 3.8554V8C29 9.10457 28.1046 10 27 10H18.4232",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 19V9.06155C13 8.14382 12.3754 7.34385 11.4851 7.12127L5.48507 5.62127C4.22278 5.30569 3 6.26041 3 7.56155V11C3 12.1046 3.89543 13 5 13H12.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M26 19H6V24H26V19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
