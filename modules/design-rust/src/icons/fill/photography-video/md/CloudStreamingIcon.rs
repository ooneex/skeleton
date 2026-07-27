use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CloudStreamingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CloudStreamingIcon(props: CloudStreamingIconProps) -> Element {
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
                d: "M3 27H18V32H16V29H3V27Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 27H29V29H20V27Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.03687 11.6641C4.46532 5.70468 9.42946 1 15.5 1C21.7433 1 26.8245 5.97508 26.9956 12.177C29.8635 12.8525 32 15.4236 32 18.5C32 22.0903 29.0903 25 25.5 25H7C3.13372 25 0 21.8663 0 18C0 15.1916 1.65567 12.7785 4.03687 11.6641ZM22.5156 15L12.5 9.27682V20.7232L22.5156 15Z",
                fill: "currentColor",
            }
        }
    }
}
