use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct KickScooterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn KickScooterIcon(props: KickScooterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9.61252 21H23.2397",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4 27C5.65685 27 7 25.6569 7 24C7 22.3431 5.65685 21 4 21C2.34315 21 1 22.3431 1 24C1 25.6569 2.34315 27 4 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M28 27C29.6569 27 31 25.6569 31 24C31 22.3431 29.6569 21 28 21C26.3431 21 25 22.3431 25 24C25 25.6569 26.3431 27 28 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4 17V17C7.31371 17 10 19.6863 10 23V25H21L25 18L23.3914 7.54383C23.1662 6.08033 21.907 5 20.4262 5H20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M26.4615 8L26.6923 9.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
