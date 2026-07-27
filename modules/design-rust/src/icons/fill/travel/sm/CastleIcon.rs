use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CastleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CastleIcon(props: CastleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23 14H21V17.0259L18 17V22H23V14Z",
                fill: "currentColor",
            }
            path {
                d: "M1 14H3V17.0259L6 17V22H1V14Z",
                fill: "currentColor",
            }
            path {
                d: "M19 11H5V22H10V18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18V22H19V11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 2V6H7V2H9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 2V6H11V2H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 2V6H15V2H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 4H20V6H4V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 2V6H19V2H21V9H3V2H5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
