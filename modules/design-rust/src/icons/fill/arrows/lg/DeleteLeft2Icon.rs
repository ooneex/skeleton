use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DeleteLeft2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DeleteLeft2Icon(props: DeleteLeft2IconProps) -> Element {
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
                d: "M2.68774 24L17.9819 6L38 6C41.3137 6 44 8.68629 44 12L44 36C44 39.3137 41.3137 42 38 42L17.9819 42L2.68774 24Z",
                fill: "currentColor",
            }
        }
    }
}
