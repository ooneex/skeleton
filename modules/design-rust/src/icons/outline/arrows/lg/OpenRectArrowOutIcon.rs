use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OpenRectArrowOutIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OpenRectArrowOutIcon(props: OpenRectArrowOutIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 5H36C38.7614 5 41 7.23858 41 10V38C41 40.7614 38.7614 43 36 43H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M30 25L31 25L31 23L30 23L30 25ZM4 25L30 25L30 23L4 23L4 25ZM4 25L4.91849 25L4.91849 23L4 23L4 25Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            path {
                d: "M14 34L4 24L14 14",
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
