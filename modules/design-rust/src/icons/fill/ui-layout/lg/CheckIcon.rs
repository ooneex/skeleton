use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckIcon(props: CheckIconProps) -> Element {
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
                d: "M45.1208 7.95402L15.1176 39.287L2.89404 23.695L5.255 21.8441L15.3439 34.713L42.954 5.87918L45.1208 7.95402Z",
                fill: "currentColor",
            }
        }
    }
}
