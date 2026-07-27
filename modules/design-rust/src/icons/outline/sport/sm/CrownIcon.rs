use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CrownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CrownIcon(props: CrownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2.5 15H21.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M17 9.78125L22 6.1875L21.144 17.1556C21.0627 18.1967 20.1942 19 19.15 19H4.84998C3.80577 19 2.9373 18.1967 2.85605 17.1556L2 6.1875L7 9.78125L12 3L17 9.78125Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
