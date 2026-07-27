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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M46.77 28.6487L35.3507 17.2294L33.2294 19.3507L44.6487 30.77L46.77 28.6487Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M35.3452 30.7761L46.7689 19.3524L44.6476 17.231L33.2239 28.6548L35.3452 30.7761Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M30 2.2962L16.6243 14H8C4.68629 14 2 16.6863 2 20V28C2 31.3137 4.68629 34 8 34H16.6243L30 45.7037V2.2962Z",
                fill: "currentColor",
            }
        }
    }
}
