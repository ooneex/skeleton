use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TabletChargingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TabletChargingIcon(props: TabletChargingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M36 3H12C9.23858 3 7 5.23858 7 8V40C7 42.7614 9.23858 45 12 45H36C38.7614 45 41 42.7614 41 40V8C41 5.23858 38.7614 3 36 3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 12C15.1046 12 16 11.1046 16 10C16 8.89543 15.1046 8 14 8C12.8954 8 12 8.89543 12 10C12 11.1046 12.8954 12 14 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M25.25 16L19 26H24H29L22.75 36",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
