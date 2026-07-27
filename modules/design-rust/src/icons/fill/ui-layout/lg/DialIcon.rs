use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DialIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DialIcon(props: DialIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27 10.2808L26 23H22L21 10.2808C13.5974 11.685 8 18.1888 8 26C8 34.8366 15.1634 42 24 42C32.8366 42 40 34.8366 40 26C40 18.1888 34.4026 11.685 27 10.2808Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 3V7H22.5V3H25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 27.5L1 27.5L1 24.5L5 24.5L5 27.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M47 27.5L43 27.5L43 24.5L47 24.5L47 27.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13.799 5.33142L15.799 8.79552L13.201 10.2955L11.201 6.83142L13.799 5.33142Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44.6686 15.799L41.2045 17.799L39.7045 15.201L43.1686 13.201L44.6686 15.799Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.83142 13.201L8.29552 15.201L6.79552 17.799L3.33142 15.799L4.83142 13.201Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M36.7991 6.83142L34.7991 10.2955L32.201 8.79552L34.201 5.33142L36.7991 6.83142Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
