use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowBoldUpFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowBoldUpFromLineIcon(props: ArrowBoldUpFromLineIconProps) -> Element {
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
                d: "M16 22L8 22L8 20L16 20L16 22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.9999 18L7.99994 18L7.99994 13L1.91931 13L11.9999 0.39922L22.0806 13L15.9999 13L15.9999 18Z",
                fill: "currentColor",
            }
        }
    }
}
