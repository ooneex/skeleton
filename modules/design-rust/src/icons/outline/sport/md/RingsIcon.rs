use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RingsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RingsIcon(props: RingsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 9V2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22 9V2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10 29C14.4183 29 18 25.4183 18 21C18 16.5817 14.4183 13 10 13C5.58172 13 2 16.5817 2 21C2 25.4183 5.58172 29 10 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19.3293 13.4566C20.1646 13.1609 21.0635 13 22 13C26.4183 13 30 16.5817 30 21C30 25.4183 26.4183 29 22 29C21.0712 29 20.1793 28.8417 19.35 28.5506",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
