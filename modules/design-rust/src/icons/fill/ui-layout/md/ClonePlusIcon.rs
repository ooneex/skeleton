use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ClonePlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ClonePlusIcon(props: ClonePlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26.1739 30C28.287 30 30 28.287 30 26.1739L30 11.8261C30 9.713 28.287 8 26.1739 8L26 8L26 21C26 23.7614 23.7614 26 21 26L8 26L8 26.1739C8 28.287 9.713 30 11.8261 30L26.1739 30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.1739 24C22.287 24 24 22.287 24 20.1739L24 5.82609C24 3.713 22.287 2 20.1739 2H5.82609C3.713 2 2 3.713 2 5.82609V20.1739C2 22.287 3.713 24 5.82609 24L20.1739 24ZM14 7V12H19V14H14V19H12V14H7V12H12V7H14Z",
                fill: "currentColor",
            }
        }
    }
}
