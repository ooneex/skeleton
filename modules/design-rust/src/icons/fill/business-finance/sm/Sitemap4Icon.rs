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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 11H21V15H19V13H5V15H3V11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 9V15H11V9H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M9.5 17V22H14.5V17H9.5Z",
                fill: "currentColor",
            }
            path {
                d: "M9.5 2V7H14.5V2H9.5Z",
                fill: "currentColor",
            }
            path {
                d: "M17.5 17V22H22.5V17H17.5Z",
                fill: "currentColor",
            }
            path {
                d: "M1.5 17V22H6.5V17H1.5Z",
                fill: "currentColor",
            }
        }
    }
}
