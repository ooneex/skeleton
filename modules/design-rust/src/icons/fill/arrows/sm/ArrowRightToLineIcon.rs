use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowRightToLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowRightToLineIcon(props: ArrowRightToLineIconProps) -> Element {
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
                d: "M20 22L20 2L22 2L22 22L20 22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 11L17 11L17 13L2 13L2 11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.58569 18L15.5857 12L9.58569 5.99997L10.9999 4.58576L18.4141 12L10.9999 19.4142L9.58569 18Z",
                fill: "currentColor",
            }
        }
    }
}
