use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CartMinusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CartMinusIcon(props: CartMinusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6 23C7.10457 23 8 22.1046 8 21C8 19.8954 7.10457 19 6 19C4.89543 19 4 19.8954 4 21C4 22.1046 4.89543 23 6 23Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 18H24V20H14V18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M20.5933 16H14C13.2597 16 12.6134 16.4022 12.2676 17H7.734C6.251 17 4.974 15.893 4.764 14.425L3.133 3H0V1H4.867L5.438 5H23.219L21.301 14.589C21.1936 15.1284 20.9428 15.6109 20.5933 16Z",
                fill: "currentColor",
            }
        }
    }
}
