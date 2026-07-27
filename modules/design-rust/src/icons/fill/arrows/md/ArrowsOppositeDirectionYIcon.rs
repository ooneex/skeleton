use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsOppositeDirectionYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsOppositeDirectionYIcon(props: ArrowsOppositeDirectionYIconProps) -> Element {
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
                d: "M8 21L8 3.00001L10 3.00001L10 21L8 21Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 11L22 29L24 29L24 11L22 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.00003 10.4142L9.00003 4.41418L15 10.4142L16.4142 8.99997L9.00003 1.58576L1.58582 8.99997L3.00003 10.4142Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 21.5858L23 27.5858L29 21.5858L30.4142 23L23 30.4142L15.5858 23L17 21.5858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
