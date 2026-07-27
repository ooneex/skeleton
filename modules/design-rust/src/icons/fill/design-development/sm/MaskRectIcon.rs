use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MaskRectIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MaskRectIcon(props: MaskRectIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 17L19 7L11 7L11 17L19 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M1 7L1 17L7 17L7 7L1 7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 2H23V22H9V2ZM11 4V20H21V4H11Z",
                fill: "currentColor",
            }
        }
    }
}
