use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StorageUnitIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StorageUnitIcon(props: StorageUnitIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 9H10V19H22V9H17V12H15V9Z",
                fill: "currentColor",
            }
            path {
                d: "M8 21H3V31H15V21H10V24H8V21Z",
                fill: "currentColor",
            }
            path {
                d: "M22 21H17V31H29V21H24V24H22V21Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 0.348267L31.3644 9.12791L30.3721 10.8644L16 2.65177L1.6279 10.8644L0.63562 9.12791L16 0.348267Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
