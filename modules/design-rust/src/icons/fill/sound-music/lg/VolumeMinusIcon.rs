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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 2.2962L16.6243 14H8C4.68629 14 2 16.6863 2 20V28C2 31.3137 4.68629 34 8 34H16.6243L30 45.7037V2.2962Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M33 25.5L47 25.5L47 22.5L33 22.5L33 25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
