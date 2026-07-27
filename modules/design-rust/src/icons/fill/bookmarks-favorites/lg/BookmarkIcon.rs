use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BookmarkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BookmarkIcon(props: BookmarkIconProps) -> Element {
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
                d: "M6 8C6 4.68629 8.68629 2 12 2H36C39.3137 2 42 4.68629 42 8V45.7484L24 35.1602L6 45.7484V8Z",
                fill: "currentColor",
            }
        }
    }
}
