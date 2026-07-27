use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PinStarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PinStarIcon(props: PinStarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M38.9164 25.5C39.596 23.4815 40 21.3962 40 19.2911C40 8.90479 31.7993 3 24 3C16.2007 3 8 8.90479 8 19.2911C8 29.3327 17.2354 38.9557 21.6731 43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            circle {
                cx: "24",
                cy: "19",
                r: "5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M33 25L36.2457 31.2544L43.5 32.258L38.25 37.1265L39.489 44L33 40.7544L26.511 44L27.75 37.1265L22.5 32.258L29.7543 31.2544L33 25Z",
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
