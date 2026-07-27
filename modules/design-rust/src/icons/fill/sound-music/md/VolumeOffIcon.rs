use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VolumeOffIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VolumeOffIcon(props: VolumeOffIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.6848 8H7C4.79086 8 3 9.79086 3 12V20C3 22.2091 4.79086 24 7 24H11L27 8V0.0793457L15.6848 8Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31.4142 5L6 30.4142L4.58578 29L30 3.58579L31.4142 5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M15.2426 24H15.6848L27 31.9207V12.2426L15.2426 24Z",
                fill: "currentColor",
            }
        }
    }
}
