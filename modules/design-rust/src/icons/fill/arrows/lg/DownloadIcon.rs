use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DownloadIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DownloadIcon(props: DownloadIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22.5 2H25.5V19H22.5V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M22.5 19V25H13.7732L22.5 34.8177V34.9999H22.662L24 36.5052L25.338 34.9999H25.5V34.8177L34.2269 25H25.5V19H40.5308L45.2247 42H2.77527L7.46915 19H22.5Z",
                fill: "currentColor",
            }
        }
    }
}
