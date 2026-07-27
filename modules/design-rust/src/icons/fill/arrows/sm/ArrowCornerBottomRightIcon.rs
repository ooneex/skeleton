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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 20.5L8 9C8 8.44772 8.44772 8 9 8L20 8L20 6L9 6C7.34315 6 6 7.34315 6 9L6 20.5L8 20.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.9999 12.9142L21.9141 7.00003L15.9999 1.08582L14.5857 2.50003L19.0857 7.00003L14.5857 11.5L15.9999 12.9142Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.5001 14.5858L7.00009 19.0858L2.50009 14.5858L1.08588 16L7.00009 21.9142L12.9143 16L11.5001 14.5858Z",
                fill: "currentColor",
            }
        }
    }
}
