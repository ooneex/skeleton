use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AirportIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AirportIcon(props: AirportIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 10H10L10 22H3V10ZM5 12H8V14H5V12ZM5 16V18H8V16H5Z",
                fill: "currentColor",
            }
            path {
                d: "M5.5 1H7.5V4H5.5V1Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0.867218 2H12.1328L11.3828 8H1.61722L0.867218 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 12H12V22H22V17C22 14.2386 19.7614 12 17 12ZM20 20V17H18V20H20ZM16 20V17H14V20H16Z",
                fill: "currentColor",
            }
        }
    }
}
