use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MirrorWithFrameIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MirrorWithFrameIcon(props: MirrorWithFrameIconProps) -> Element {
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
                d: "M21 20H3V18H21V20Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 10H3V8H7V10Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 10H17V8H21V10Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 22L2 2L4 2L4 22L2 22Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 22L20 2L22 2L22 22L20 22Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.5 2C16.8807 2 18 3.11929 18 4.5V13.5C18 14.8807 16.8807 16 15.5 16H8.5C8.41371 16 8.32843 15.9956 8.24439 15.9871C6.98375 15.8591 6 14.7944 6 13.5V4.5C6 4.41371 6.00437 4.32843 6.01291 4.24439C6.14093 2.98375 7.20558 2 8.5 2H15.5ZM16 8.41425V5.58582L8.00629 13.5795C8.04438 13.8179 8.25092 14 8.5 14H10.4142L16 8.41425Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
