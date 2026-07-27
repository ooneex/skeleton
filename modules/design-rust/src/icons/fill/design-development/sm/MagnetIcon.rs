use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MagnetIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MagnetIcon(props: MagnetIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 12V9H9V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V9H22V12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z",
                fill: "currentColor",
            }
            path {
                d: "M2 2V7H9V2H2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M22 7V2H15V7H22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
