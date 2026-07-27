use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ThreeDPrinterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ThreeDPrinterIcon(props: ThreeDPrinterIconProps) -> Element {
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
                d: "M17 10V16.1459L10 19.3038V26.6962L15 28.9518V22.3541L24 18.2939V27.988L16 31.597L8 27.988V18.012L15 14.8541V10H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M11 6.00005L21 6.00004L21.0001 8.50005L16 12.25L11.0001 8.50005L11 6.00005Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 2H29V4H3V2Z",
                fill: "currentColor",
            }
        }
    }
}
