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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.91421 3.5L10.9142 9.49999L9.49999 10.9142L3.5 4.91421L4.91421 3.5Z",
                fill: "currentColor",
            }
            path {
                d: "M20.0001 18.5857L18.5859 19.9999L13.0859 14.4999L14.5002 13.0857L20.0001 18.5857Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M1.99998 10L9.99997 1.99997L1.99995 2.00007L1.99998 10Z",
                fill: "currentColor",
            }
            path {
                d: "M22 14L14 22L22 21.9999L22 14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
