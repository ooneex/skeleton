use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WirelessChargingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WirelessChargingIcon(props: WirelessChargingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M39.5563 39.5563C48.1479 30.9648 48.1479 17.0351 39.5563 8.4436",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M35.3137 35.3137C41.5621 29.0653 41.5621 18.9347 35.3137 12.6863",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12.6863 35.3137C6.43789 29.0653 6.43789 18.9347 12.6863 12.6863",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8.4436 39.5563C-0.147931 30.9648 -0.147931 17.0351 8.4436 8.4436",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M26.25 11L15 26.8235H22.5L21.75 37L33 21.1765H25.5L26.25 11Z",
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
