use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsDiagonalOppositeDirectionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsDiagonalOppositeDirectionIcon(props: ArrowsDiagonalOppositeDirectionIconProps) -> Element {
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
                d: "M1.58588 15L14.5001 2.08573L15.9143 3.49994L3.0001 16.4142L1.58588 15Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.4141 9.00003L9.49991 21.9143L8.08569 20.5001L20.9999 7.58582L22.4141 9.00003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 10L14 4L8 4L8 2L16 2L16 10L14 10Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 14L10 20L16 20L16 22L8 22L8 14L10 14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
