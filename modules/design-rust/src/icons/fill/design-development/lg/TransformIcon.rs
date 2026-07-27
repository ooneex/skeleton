use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TransformIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TransformIcon(props: TransformIconProps) -> Element {
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
                d: "M28 44L4 44L4 20L28 20L28 44ZM20.8787 25L20.9393 24.9393L21 25H23.0002L23.0002 27.0002L23.0607 27.0607L23.0002 27.1211L23.0003 36L20.0003 36L20.0002 30.1211L10 40.1213L7.87868 38L17.8787 28H12V25H20.8787Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 15.5C19 8.04416 25.0442 2 32.5 2C39.9558 2 46 8.04416 46 15.5C46 22.9558 39.9558 29 32.5 29H31V20C31 18.3431 29.6569 17 28 17H19V15.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
