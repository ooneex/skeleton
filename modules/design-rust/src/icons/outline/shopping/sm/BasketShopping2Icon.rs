use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BasketShopping2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BasketShopping2Icon(props: BasketShopping2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3.51 12H3.5L4.30232 19.2209C4.41486 20.2337 5.27099 21 6.29009 21H17.7099C18.729 21 19.5851 20.2337 19.6977 19.2209L20.5 12H20.49",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M2 8H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8.75 1.5L5 8H6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15.25 1.5L19 8H18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
