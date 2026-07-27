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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 0.25L18.6 5.2L17.4 6.8L12 2.75L6.59999 6.8L5.39999 5.2L12 0.25Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 5L1 22L23 22V5H1Z",
                fill: "currentColor",
            }
        }
    }
}
