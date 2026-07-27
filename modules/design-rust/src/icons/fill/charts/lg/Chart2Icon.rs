use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Chart2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Chart2Icon(props: Chart2IconProps) -> Element {
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
                d: "M4 30H14V44H4V30Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 17H29V44H19V17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M34 4H44V44H34V4Z",
                fill: "currentColor",
            }
        }
    }
}
