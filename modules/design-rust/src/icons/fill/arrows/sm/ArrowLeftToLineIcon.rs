use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowLeftToLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowLeftToLineIcon(props: ArrowLeftToLineIconProps) -> Element {
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
                d: "M4 2L4 22L2 22L2 2L4 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 13L7 13L7 11L22 11L22 13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.4143 6.00003L8.41431 12L14.4143 18L13.0001 19.4142L5.58588 12L13.0001 4.58582L14.4143 6.00003Z",
                fill: "currentColor",
            }
        }
    }
}
