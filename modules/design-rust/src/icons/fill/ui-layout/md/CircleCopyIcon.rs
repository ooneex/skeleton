use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleCopyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleCopyIcon(props: CircleCopyIconProps) -> Element {
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
                d: "M9 20C9 13.9249 13.9249 9 20 9C26.0751 9 31 13.9249 31 20C31 26.0751 26.0751 31 20 31C13.9249 31 9 26.0751 9 20Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 20C9 13.9249 13.9249 9 20 9C26.0751 9 31 13.9249 31 20C31 26.0751 26.0751 31 20 31C13.9249 31 9 26.0751 9 20Z",
                fill: "currentColor",
            }
            path {
                d: "M12 1C5.92487 1 1 5.92487 1 12C1 16.3277 3.49923 20.0718 7.13314 21.8675C7.04541 21.2577 7 20.6341 7 20C7 12.8203 12.8203 7 20 7C20.6341 7 21.2577 7.04541 21.8675 7.13314C20.0718 3.49923 16.3277 1 12 1Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
