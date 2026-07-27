use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaPlayIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaPlayIcon(props: MediaPlayIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 44.7044L8.00001 3.29562L45.0499 24L8 44.7044Z",
                fill: "currentColor",
            }
        }
    }
}
