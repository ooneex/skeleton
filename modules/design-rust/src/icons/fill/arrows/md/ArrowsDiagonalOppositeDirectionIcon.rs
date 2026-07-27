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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.2928 2.29285L20.707 3.70706L2.99991 21.4142L1.58569 20L19.2928 2.29285Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.7072 29.7072L11.293 28.2929L29.0001 10.5858L30.4143 12L12.7072 29.7072Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 13L21 1.99997L10 1.99997L10 3.99997L19 3.99997L19 13L21 13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 19L11 30L22 30L22 28L13 28L13 19L11 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
