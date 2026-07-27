use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsTriangleOppositeDirectionXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsTriangleOppositeDirectionXIcon(props: ArrowsTriangleOppositeDirectionXIconProps) -> Element {
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
                d: "M2 6H16V8H2V6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 16H8V18H22V16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 1.13147L22.8028 6.99999L14 12.8685V1.13147Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 11.1315L1.19722 17L10 22.8685V11.1315Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
