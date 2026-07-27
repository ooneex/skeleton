use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PlugIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PlugIcon(props: PlugIconProps) -> Element {
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
                d: "M17 29V32H15V29H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M2 6H30V11H27V13C26.9981 15.1697 26.3626 17.2855 25.1807 19.0565C23.9988 20.8274 22.3287 22.1666 20.4 22.8898V27H11.6V22.8898C9.67128 22.1666 8.00117 20.8274 6.81931 19.0565C5.63745 17.2855 5.00188 15.1697 5 13V11H2V6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 1V7H22V1H24Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 1V7H8V1H10Z",
                fill: "currentColor",
            }
        }
    }
}
