use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CodeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CodeIcon(props: CodeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.49997 18.9141L0.585759 11.9999L7.49997 5.08569L8.91418 6.49991L3.41419 11.9999L8.91418 17.4999L7.49997 18.9141Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.0858 6.49991L20.5858 11.9999L15.0858 17.4999L16.5 18.9141L23.4142 11.9999L16.5 5.08569L15.0858 6.49991Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
