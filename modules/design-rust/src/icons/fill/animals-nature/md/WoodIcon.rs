use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WoodIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WoodIcon(props: WoodIconProps) -> Element {
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
                d: "M18.4347 2L20.6503 7.8659L21.966 3.94678L29 4.58167L27.4326 30H17V20H15V30H9.0707V25.9935L1 15.4764L4.57259 11.9293L9.0707 14.7713V3.16215L18.4347 2ZM17 14.6667H15V18H17V14.6667Z",
                fill: "currentColor",
            }
        }
    }
}
