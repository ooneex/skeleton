use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShopSignIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShopSignIcon(props: ShopSignIconProps) -> Element {
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
                d: "M16 0.266479L25.5855 7.18933L24.4145 8.81069L16 2.73355L7.58547 8.81069L6.41449 7.18933L16 0.266479Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1.99988 29L1.99988 7L30 7L30 29L1.99988 29Z",
                fill: "currentColor",
            }
        }
    }
}
