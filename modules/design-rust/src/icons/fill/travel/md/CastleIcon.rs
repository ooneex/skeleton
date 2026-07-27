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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 18H28V21H26V30H30V18Z",
                fill: "currentColor",
            }
            path {
                d: "M2 18H4V21H6V30H2V18Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 14H8V30L13 30V25C13 23.3431 14.3431 22 16 22C17.6569 22 19 23.3431 19 25V30H24V19H20V17H24V14ZM11 18V16H14V18H11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 2H10V6H13V2H19V6H22V2H27V12H5V2Z",
                fill: "currentColor",
            }
        }
    }
}
