use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SitemapIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SitemapIcon(props: SitemapIconProps) -> Element {
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
                d: "M4 14H28V19H26V16H6V19H4V14Z",
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
                d: "M19.5 2H12.5V9H19.5V2Z",
                fill: "currentColor",
            }
            path {
                d: "M1 25C1 27.2091 2.79086 29 5 29C7.20914 29 9 27.2091 9 25C9 22.7909 7.20914 21 5 21C2.79086 21 1 22.7909 1 25Z",
                fill: "currentColor",
            }
            path {
                d: "M12 25C12 27.2091 13.7909 29 16 29C18.2091 29 20 27.2091 20 25C20 22.7909 18.2091 21 16 21C13.7909 21 12 22.7909 12 25Z",
                fill: "currentColor",
            }
            path {
                d: "M23 25C23 27.2091 24.7909 29 27 29C29.2091 29 31 27.2091 31 25C31 22.7909 29.2091 21 27 21C24.7909 21 23 22.7909 23 25Z",
                fill: "currentColor",
            }
        }
    }
}
