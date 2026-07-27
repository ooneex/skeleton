use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VolumeMinusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VolumeMinusIcon(props: VolumeMinusIconProps) -> Element {
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
                d: "M32 15L22 15L22 17L32 17L32 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M20 0.881016L10.1412 9H5C2.79086 9 1 10.7909 1 13V19C1 21.2091 2.79086 23 5 23H10.1412L20 31.119V0.881016Z",
                fill: "currentColor",
            }
        }
    }
}
