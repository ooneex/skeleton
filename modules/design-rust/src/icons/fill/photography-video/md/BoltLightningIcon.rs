use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltLightningIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltLightningIcon(props: BoltLightningIconProps) -> Element {
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
                d: "M10.053 1H21.1741L18.7774 11.6122H29.1708L12.4912 31.1186L13.7786 19.4758L5.74037 19.444L10.053 1Z",
                fill: "currentColor",
            }
        }
    }
}
