use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChocoCreamIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChocoCreamIcon(props: ChocoCreamIconProps) -> Element {
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
                d: "M40 13H8V4H40V13ZM12 10H15V7H12V10ZM19 7V10H22V7H19ZM26 10H29V7H26V10ZM33 10H36V7H33V10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M20 27V30H14V27H20Z",
                fill: "currentColor",
            }
            path {
                d: "M34 27V30H24V27H34Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M41.0283 19.4756C41.6615 20.4481 41.9999 21.5852 42 22.749V38C42 41.3137 39.3137 44 36 44H12C8.68629 44 6 41.3137 6 38V22.749C6.00009 21.5075 6.38533 20.2966 7.10254 19.2832L9.43359 16H38.5713L41.0283 19.4756ZM38 22.7881C28.9725 19.4148 19.0275 19.4148 10 22.7881V37H38V22.7881Z",
                fill: "currentColor",
            }
        }
    }
}
