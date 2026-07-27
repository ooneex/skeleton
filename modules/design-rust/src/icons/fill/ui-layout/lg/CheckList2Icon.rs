use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckList2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckList2Icon(props: CheckList2IconProps) -> Element {
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
                d: "M37.5 19L46 19V22L37.5 22V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M32.5 27L46 27V30L32.5 30V27Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27.5 35L46 35V38L27.5 38V35Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M38.1117 10.7982L12.7907 41.4698L1.90967 26.0385L4.36144 24.3097L12.9784 36.5302L35.7982 8.8883L38.1117 10.7982Z",
                fill: "currentColor",
            }
        }
    }
}
