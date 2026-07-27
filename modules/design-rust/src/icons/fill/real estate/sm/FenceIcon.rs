use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FenceIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FenceIcon(props: FenceIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 17V19H8V17H16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M16 8V10H8V8H16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M10 4.58594V22H3V4.58594L6.5 1.08594L10 4.58594Z",
                fill: "currentColor",
            }
            path {
                d: "M21 4.58594V22H14V4.58594L17.5 1.08594L21 4.58594Z",
                fill: "currentColor",
            }
        }
    }
}
