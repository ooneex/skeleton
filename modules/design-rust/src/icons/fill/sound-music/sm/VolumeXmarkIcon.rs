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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 8.58582L23.4142 14L22 15.4142L16.5858 10L18 8.58582Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 8.58582L16.5858 14L18 15.4142L23.4142 10L22 8.58582Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M15 0.864929L7.63795 6.99997H4C2.34315 6.99997 1 8.34312 1 9.99997V14C1 15.6568 2.34315 17 4 17H7.63795L15 23.135V0.864929Z",
                fill: "currentColor",
            }
        }
    }
}
