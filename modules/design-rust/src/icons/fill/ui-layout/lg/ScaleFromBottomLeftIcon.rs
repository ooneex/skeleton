use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ScaleFromBottomLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ScaleFromBottomLeftIcon(props: ScaleFromBottomLeftIconProps) -> Element {
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
                d: "M21.0017 27.0002L21.0017 43.0919L19.0017 43.0919L4.91008 43.0919L4.91008 29.0002L4.91008 27.0002L21.0017 27.0002Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44.0017 43.9584L4.00006 44.0018L4.04336 4.04184L44.0017 3.99854L44.0017 43.9584ZM41.0017 7.00179L7.04011 7.03859L7.00332 40.9985L41.0017 40.9616L41.0017 7.00179Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24.5014 25.6214L35.1894 14.9337L37.5626 12.5606L35.4413 10.4392L22.3801 23.5001L24.5014 25.6214Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24.0017 12.9998L35.0017 12.9998L35.0017 24.0001L38.0017 24.0001L38.0017 9.99976L24.0017 9.99976L24.0017 12.9998Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
