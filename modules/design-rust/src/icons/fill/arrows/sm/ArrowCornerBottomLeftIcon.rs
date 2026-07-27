use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowCornerBottomLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowCornerBottomLeftIcon(props: ArrowCornerBottomLeftIconProps) -> Element {
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
                d: "M16 9C16 8.44772 15.5523 8 15 8L4 8L4 6L15 6C16.6569 6 18 7.34315 18 9L18 20.5L16 20.5L16 9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.99997 12.9142L2.08576 7.00003L7.99997 1.08582L9.41418 2.50003L4.91418 7.00003L9.41418 11.5L7.99997 12.9142Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.5 14.5858L17 19.0858L21.5 14.5858L22.9142 16L17 21.9142L11.0858 16L12.5 14.5858Z",
                fill: "currentColor",
            }
        }
    }
}
