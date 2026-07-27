use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Receipt2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Receipt2Icon(props: Receipt2IconProps) -> Element {
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
                d: "M28 27C28 29.2091 26.2091 31 24 31H8C5.79086 31 4 29.2091 4 27V1.07727L10.5 5.63571L16 1.77857L21.5 5.63571L28 1.07727L28 27ZM9 25H16V23H9V25ZM19 25V23H23V25H19ZM9 19H16V17H9V19ZM19 19V17H23V19H19ZM9 13H16V11H9V13ZM19 13V11H23V13H19Z",
                fill: "currentColor",
            }
        }
    }
}
