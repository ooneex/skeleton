use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTriangleLineExpandDiagonal4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTriangleLineExpandDiagonal4Icon(props: ArrowTriangleLineExpandDiagonal4IconProps) -> Element {
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
                d: "M25.7928 27.2071L5.29272 6.70712L6.70694 5.29291L27.207 25.7929L25.7928 27.2071Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13.9143 2L1.99999 2.00007L1.99999 13.9142L13.9143 2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18.0857 30.0001L30 30L30 18.0859L18.0857 30.0001Z",
                fill: "currentColor",
            }
        }
    }
}
