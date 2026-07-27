use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltBanIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltBanIcon(props: BoltBanIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M32.5 43.5L43.5 32.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M22.75 6.99661L4.75 27.9932H17.75L16.75 41.4966L34.75 20.5H21.75L22.75 6.99661Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M38 46C42.4183 46 46 42.4183 46 38C46 33.5817 42.4183 30 38 30C33.5817 30 30 33.5817 30 38C30 42.4183 33.5817 46 38 46Z",
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
