use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltIcon(props: BoltIconProps) -> Element {
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
                d: "M28.6273 3.21448L27.3503 19.0905H43.2975L19.3727 44.7856L20.6497 28.9095H4.70253L28.6273 3.21448Z",
                fill: "currentColor",
            }
        }
    }
}
