use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowRightFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowRightFromLineIcon(props: ArrowRightFromLineIconProps) -> Element {
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
                d: "M6 11L21 11L21 13L6 13L6 11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13.5857 18L19.5857 12L13.5857 5.99997L14.9999 4.58576L22.4141 12L14.9999 19.4142L13.5857 18Z",
                fill: "currentColor",
            }
        }
    }
}
