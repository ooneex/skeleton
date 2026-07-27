use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckDoubleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckDoubleIcon(props: CheckDoubleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M36.6114 11.2942L11.7875 41.4798L1.41138 26.6295L3.87055 24.9113L11.9819 36.5202L34.2943 9.38868L36.6114 11.2942Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M46.611 11.2942L21.7817 41.4866L18.4126 36.6206L20.8791 34.9129L21.9873 36.5135L44.2939 9.38869L46.611 11.2942Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
