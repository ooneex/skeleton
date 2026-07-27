use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WatchIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WatchIcon(props: WatchIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 8L16 2H32L34 8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 40L16 46H32L34 40",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M39 21L40 21C40.5523 21 41 21.4477 41 22V26C41 26.5523 40.5523 27 40 27H39",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M34 8H14C11.2386 8 9 10.2386 9 13V35C9 37.7614 11.2386 40 14 40H34C36.7614 40 39 37.7614 39 35V13C39 10.2386 36.7614 8 34 8Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 15V24H34",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
