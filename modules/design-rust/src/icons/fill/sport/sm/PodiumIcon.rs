use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PodiumIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PodiumIcon(props: PodiumIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 0L13.0811 2.13965L15.5 2.483L13.75 4.14853L14.163 6.5L12 5.38965L9.83622 6.5L10.25 4.14853L8.5 2.483L10.9181 2.13965L12 0Z",
                fill: "currentColor",
            }
            path {
                d: "M15 8H9V22H15V8Z",
                fill: "currentColor",
            }
            path {
                d: "M22 15H17V22H22V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M7 12H2V22H7V12Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
