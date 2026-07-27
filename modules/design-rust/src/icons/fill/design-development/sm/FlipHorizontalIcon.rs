use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FlipHorizontalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FlipHorizontalIcon(props: FlipHorizontalIconProps) -> Element {
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
                d: "M13 1L13 23L11 23L11 1L13 1Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M8.99999 5.69727L0.13147 19H8.99999V5.69727Z",
                fill: "currentColor",
            }
            path {
                d: "M15 5.69727L23.8685 19H15V5.69727Z",
                fill: "currentColor",
            }
        }
    }
}
