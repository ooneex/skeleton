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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.9999 1.65991L0.56958 15.2194L10.9999 22.5206V1.65991Z",
                fill: "currentColor",
            }
            path {
                d: "M13 22.5207L23.4304 15.2195L13 1.65991V22.5207Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
