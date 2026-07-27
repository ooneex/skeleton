use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartActivity2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartActivity2Icon(props: ChartActivity2IconProps) -> Element {
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
                d: "M20.0552 1.922L25.6181 19.1165L27.3333 15H31V17H28.6667L25.3819 24.8835L19.9448 8.078L11.9448 30.078L6.38186 12.8835L4.66666 17H0.999985V15H3.33333L6.61811 7.11648L12.0552 23.922L20.0552 1.922Z",
                fill: "currentColor",
            }
        }
    }
}
