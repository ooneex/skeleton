use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UploadIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UploadIcon(props: UploadIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 6.91421V10H11V6.91421H7.5L12 2L16.5 6.91421H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M11 10H4L2 21H22L20 10H13V15.9142H11V10Z",
                fill: "currentColor",
            }
        }
    }
}
