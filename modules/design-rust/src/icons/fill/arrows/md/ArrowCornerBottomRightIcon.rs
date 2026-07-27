use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowCornerBottomRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowCornerBottomRightIcon(props: ArrowCornerBottomRightIconProps) -> Element {
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
                d: "M28.5 10L12 10C10.8954 10 10 10.8954 10 12L10 28.5L8 28.5L8 12C8 9.79086 9.79086 8 12 8L28.5 8L28.5 10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.5858 15.5L27.0858 8.99997L20.5858 2.49997L22 1.08576L29.9142 8.99997L22 16.9142L20.5858 15.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.50003 20.5858L9.00003 27.0858L15.5 20.5858L16.9142 22L9.00003 29.9142L1.08582 22L2.50003 20.5858Z",
                fill: "currentColor",
            }
        }
    }
}
