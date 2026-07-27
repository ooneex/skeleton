use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VolumeXmarkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VolumeXmarkIcon(props: VolumeXmarkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31.4142 19L24 11.5858L22.5858 13L30 20.4142L31.4142 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 11.5858L22.5858 19L24 20.4142L31.4142 13L30 11.5858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M20 0.881017L10.1412 9H5C2.79086 9 1 10.7909 1 13V19C1 21.2091 2.79086 23 5 23H10.1412L20 31.119V0.881017Z",
                fill: "currentColor",
            }
        }
    }
}
