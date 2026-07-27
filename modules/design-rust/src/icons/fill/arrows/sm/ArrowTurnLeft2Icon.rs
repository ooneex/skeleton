use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTurnLeft2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTurnLeft2Icon(props: ArrowTurnLeft2IconProps) -> Element {
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
                d: "M20 15C20 11.6863 17.3137 9 14 9L3 9L3 7L14 7C18.4183 7 22 10.5817 22 15L22 22L20 22L20 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.91418 3.00003L3.91418 8.00003L8.91418 13L7.49997 14.4142L1.08576 8.00003L7.49997 1.58582L8.91418 3.00003Z",
                fill: "currentColor",
            }
        }
    }
}
