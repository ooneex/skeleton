use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChocolateBarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChocolateBarIcon(props: ChocolateBarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26 16V12H25.5C23.2909 12 21.5 10.2091 21.5 8V6.99999H21C18.7909 6.99999 17 5.20913 17 2.99999V2L9 2C7.34315 2 6 3.34315 6 5L6 16",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6 22.5V27C6 28.6569 7.34315 30 9 30H23C24.6569 30 26 28.6569 26 27V22.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4.00003 23L4 16H28V23H27.3333L16 20L4.6667 23H4.00003Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 12H10V6H14V12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
