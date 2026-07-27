use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MergeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MergeIcon(props: MergeIconProps) -> Element {
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
                d: "M1.00006 6H8.44262L16.6176 15H30V17H16.6176L8.44255 26H1V24H7.55732L14.824 16L7.55738 8H1.00006V6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.4999 8.08582L31.4141 16L23.4999 23.9142L22.0857 22.5L28.5857 16L22.0857 9.50003L23.4999 8.08582Z",
                fill: "currentColor",
            }
        }
    }
}
