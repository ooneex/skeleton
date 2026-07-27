use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoxArchiveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoxArchiveIcon(props: BoxArchiveIconProps) -> Element {
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
                d: "M2 11L2 3L30 3L30 11L2 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29 25C29 27.2091 27.2091 29 25 29L7 29C4.79086 29 3 27.2091 3 25V13L29 13L29 25ZM12 16L12 18L20 18V16H12Z",
                fill: "currentColor",
            }
        }
    }
}
