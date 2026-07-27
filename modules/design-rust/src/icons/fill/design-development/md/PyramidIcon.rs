use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PyramidIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PyramidIcon(props: PyramidIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 1.65991L0.56958 20.4195L15 30.5208V1.65991Z",
                fill: "currentColor",
            }
            path {
                d: "M17 30.5204L31.4304 20.4191L17 1.65967V30.5204Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
