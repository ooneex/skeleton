use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OctagonCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OctagonCheckIcon(props: OctagonCheckIconProps) -> Element {
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
                d: "M22.2132 1H9.78679L1 9.78679V22.2132L9.78679 31H22.2132L31 22.2132V9.78679L22.2132 1ZM13.0083 23.0145L24.4108 9.90156L22.9016 8.5892L12.9918 19.9855L9.08308 15.5882L7.58826 16.9169L13.0083 23.0145Z",
                fill: "currentColor",
            }
        }
    }
}
