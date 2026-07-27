use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTriangleLineExpandDiagonal4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTriangleLineExpandDiagonal4Icon(
    props: ArrowTriangleLineExpandDiagonal4IconProps,
) -> Element {
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
                d: "M4.99991 3.58582L20.4141 19L18.9999 20.4142L3.58569 5.00003L4.99991 3.58582Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M1.99998 10.0001L9.99997 2.00009L1.99995 2.00019L1.99998 10.0001Z",
                fill: "currentColor",
            }
            path {
                d: "M22 14L14 22L22 21.9999L22 14Z",
                fill: "currentColor",
            }
        }
    }
}
