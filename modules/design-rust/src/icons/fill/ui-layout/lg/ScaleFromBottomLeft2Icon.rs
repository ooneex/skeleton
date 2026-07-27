use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ScaleFromBottomLeft2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ScaleFromBottomLeft2Icon(props: ScaleFromBottomLeft2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M44 4H4V23H25V44H44V4Z",
                fill: "currentColor",
            }
            path {
                d: "M22 44V26H4V44H22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
