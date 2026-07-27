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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 34.5L17.5 34.5L17.5 31.5L44 31.5L44 34.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M19 24L19 42L6 33L19 24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 13.5L30.5 13.5L30.5 16.5L4 16.5L4 13.5Z",
                fill: "currentColor",
            }
            path {
                d: "M29 24L29 6L42 15L29 24Z",
                fill: "currentColor",
            }
        }
    }
}
