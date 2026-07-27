use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaStopIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaStopIcon(props: MediaStopIconProps) -> Element {
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
                d: "M6 6H42V42H6V6Z",
                fill: "currentColor",
            }
        }
    }
}
