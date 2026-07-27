use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsDiagonalOppositeDirectionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsDiagonalOppositeDirectionIcon(
    props: ArrowsDiagonalOppositeDirectionIconProps,
) -> Element {
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
                d: "M28.4393 4.43933L30.5606 6.56065L5.99998 31.1213L3.87866 29L28.4393 4.43933Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.5607 43.5607L17.4394 41.4393L42 16.8787L44.1213 19L19.5607 43.5607Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 19L31 3.99997L16 3.99997L16 6.99997L28 6.99997L28 19L31 19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 29L17 44L32 44L32 41L20 41L20 29L17 29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
