use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PotatoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PotatoIcon(props: PotatoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 19C21.5 20.5 19.5 22.5 17 23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15.5 11C15.0713 11.7096 13.8772 12.9416 13 13.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16.5857 4.52093C13.5775 1.5128 8.34603 2.15397 5 5.5C1.65397 8.84603 1.90287 14.1517 4.91099 17.1598C9.73218 21.981 8.75311 22.9601 12.6101 26.817C16.1195 30.3265 22.3095 30.6169 26.2132 26.7132C30.1169 22.8095 30.9688 15.4773 27.4593 11.9678C23.6023 8.11086 21.4069 9.34211 16.5857 4.52093Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M8 12.0094L8.00943 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
