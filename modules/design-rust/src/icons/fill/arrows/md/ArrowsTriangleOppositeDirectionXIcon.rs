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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 24L11 24L11 22L30 22L30 24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 10L21 10L21 8L2 8L2 10Z",
                fill: "currentColor",
            }
            path {
                d: "M12.5 30.0001L2 23L12.5 16.0001L12.5 30.0001Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.5 16.0001L30 9.00001L19.5 2.00012L19.5 16.0001Z",
                fill: "currentColor",
            }
        }
    }
}
