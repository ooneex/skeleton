use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlignRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlignRightIcon(props: AlignRightIconProps) -> Element {
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
                d: "M22 23L22 1L20 1L20 23L22 23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M2 5H18V10H2V5Z",
                fill: "currentColor",
            }
            path {
                d: "M8 14H18V19H8V14Z",
                fill: "currentColor",
            }
        }
    }
}
