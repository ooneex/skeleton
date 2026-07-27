use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsOppositeDirectionXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsOppositeDirectionXIcon(props: ArrowsOppositeDirectionXIconProps) -> Element {
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
                d: "M17.1213 3.99998L8.12128 13L17.1213 22L15 24.1213L3.87864 13L15 1.87866L17.1213 3.99998Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 11.5L5.99994 11.5L5.99994 14.5L31 14.5L31 11.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30.8787 26L39.8787 35L30.8787 44L33 46.1213L44.1213 35L33 23.8787L30.8787 26Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 33.5L41.9999 33.5L41.9999 36.5L17 36.5L17 33.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
