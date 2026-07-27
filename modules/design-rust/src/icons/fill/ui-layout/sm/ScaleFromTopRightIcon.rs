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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 11L22 11L22 2L13 2L13 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 22L2 2L22 2L22 22L2 22ZM4 20L20 20L20 4L4 4L4 20Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 11.5857L6.29286 16.2928L7.70708 17.707L12.4142 12.9999L11 11.5857Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 16L8 16L8 12L6 12L6 18L12 18L12 16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
