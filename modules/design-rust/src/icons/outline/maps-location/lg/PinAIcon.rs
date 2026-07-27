use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PinAIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PinAIcon(props: PinAIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 19.2911C8 32.5082 24 45 24 45C24 45 40 32.5393 40 19.2911C40 8.90479 31.7993 3 24 3C16.2007 3 8 8.90479 8 19.2911Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19 21H29",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M17.2392 26H17L23.3636 10H24.6364L31 26H30.7396",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
