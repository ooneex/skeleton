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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M41 30.0013C41 22.5455 34.9558 16.5013 27.5 16.5013L5 16.5013L5 13.5013L27.5 13.5013C36.6127 13.5013 44 20.8886 44 30.0013L44 44.0013L41 44.0013L41 30.0013Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.1213 5.00133L7.12134 15.0013L17.1213 25.0013L15 27.1226L2.8787 15.0013L15 2.88L17.1213 5.00133Z",
                fill: "currentColor",
            }
        }
    }
}
