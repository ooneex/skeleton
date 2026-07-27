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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 2H2V15H17V30H30V2Z",
                fill: "currentColor",
            }
            path {
                d: "M15 30V17H2V30H15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
