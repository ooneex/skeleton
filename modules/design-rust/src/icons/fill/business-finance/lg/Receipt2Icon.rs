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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M41 40C41 43.3137 38.3137 46 35 46H13C9.68629 46 7 43.3137 7 40V2L12 5.75L16 2.75L20 5.75L24 2.75L28 5.75L32 2.75L36 5.75L41 2L41 40ZM15 32H26V35H15V32ZM15 24V27H26V24H15ZM33 32H29V35H33V32ZM33 24V27H29V24H33ZM15 16H26V19H15V16ZM33 16V19H29V16H33Z",
                fill: "currentColor",
            }
        }
    }
}
