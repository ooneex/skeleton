use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BillboardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BillboardIcon(props: BillboardIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 2H30V4H4V30H2V2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 6V11H10V6H12Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25 6V11H23V6H25Z",
                fill: "currentColor",
            }
            path {
                d: "M6 9H29V24H6V9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
