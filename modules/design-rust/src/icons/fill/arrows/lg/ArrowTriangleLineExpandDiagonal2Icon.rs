use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTriangleLineExpandDiagonal2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTriangleLineExpandDiagonal2Icon(
    props: ArrowTriangleLineExpandDiagonal2IconProps,
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
                d: "M28 25.8787L39.0606 36.9394L36.9393 39.0607L25.8787 28L28 25.8787Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.43933 11.5607L8.93933 11.0607L11.0607 8.93933M12.6213 10.5L10.5 12.6213L20 22.1213L22.1213 20L12.6213 10.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 4L3.99994 4L3.99993 21L21 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 44L44.0001 44L44.0001 27L27 44Z",
                fill: "currentColor",
            }
        }
    }
}
