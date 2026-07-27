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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 11V2H22V22H13V11H2Z",
                fill: "currentColor",
            }
            path {
                d: "M2 13V22H11V13H2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
