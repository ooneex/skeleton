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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28.3787 12.4997L39.8777 23.9988L28.3775 35.499L30.4988 37.6203L44.1203 23.9988L30.5 10.3784L28.3787 12.4997Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.6213 12.4997L8.12132 23.9997L19.6216 35.5L17.5002 37.6213L3.87868 23.9997L17.5 10.3784L19.6213 12.4997Z",
                fill: "currentColor",
            }
        }
    }
}
