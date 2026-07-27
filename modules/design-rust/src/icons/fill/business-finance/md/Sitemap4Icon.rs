use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Sitemap4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Sitemap4Icon(props: Sitemap4IconProps) -> Element {
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
                d: "M5 14H27V19H25V16H7V19H5V14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 11V19H15V11H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M19.5 21H12.5V28H19.5V21Z",
                fill: "currentColor",
            }
            path {
                d: "M19.5 2H12.5V9H19.5V2Z",
                fill: "currentColor",
            }
            path {
                d: "M29.5 21H22.5V28H29.5V21Z",
                fill: "currentColor",
            }
            path {
                d: "M9.5 21H2.5V28H9.5V21Z",
                fill: "currentColor",
            }
        }
    }
}
