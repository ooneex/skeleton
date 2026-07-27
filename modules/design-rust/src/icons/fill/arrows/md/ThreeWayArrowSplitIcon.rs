use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ThreeWayArrowSplitIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ThreeWayArrowSplitIcon(props: ThreeWayArrowSplitIconProps) -> Element {
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
                d: "M15 30L15 26C15 22.134 11.866 19 8 19L1.99982 19L1.99982 17L8 17C12.9706 17 17 21.0294 17 26L17 30L15 30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 30L17 26C17 22.134 20.134 19 24 19L30.0002 19L30.0002 17L24 17C19.0294 17 15 21.0294 15 26L15 30L17 30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.4999 12.0858L31.4141 18L25.4999 23.9142L24.0857 22.5L28.5857 18L24.0857 13.5L25.4999 12.0858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6.50009 12.0858L0.585879 18L6.50009 23.9142L7.91431 22.5L3.41431 18L7.91431 13.5L6.50009 12.0858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 30.0001L15 2.99995L17 2.99995L17 30.0001L15 30.0001Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.0857 7.49997L15.9999 1.58576L21.9141 7.49997L20.4999 8.91418L15.9999 4.41418L11.4999 8.91418L10.0857 7.49997Z",
                fill: "currentColor",
            }
        }
    }
}
