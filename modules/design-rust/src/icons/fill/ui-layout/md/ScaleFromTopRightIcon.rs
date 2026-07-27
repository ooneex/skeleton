use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ScaleFromTopRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ScaleFromTopRightIcon(props: ScaleFromTopRightIconProps) -> Element {
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
                d: "M18 13.9998L18 2.99976L20 2.99976L29 2.99976L29 11.9998L29 13.9998L18 13.9998Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 28L28 28L28 4L4 3.99999L4 28ZM2 1.99999L30 2L30 30L2 30L2 1.99999Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 15.5857L7.29286 23.2928L8.70708 24.707L16.4142 16.9999L15 15.5857Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 23L9 23L9 16L7 16L7 25L16 25L16 23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
