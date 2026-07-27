use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BookmarksIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BookmarksIcon(props: BookmarksIconProps) -> Element {
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
                d: "M6 14C6 11.2386 8.23858 9 11 9H31C33.7614 9 36 11.2386 36 14V45.7546L21 36.8696L6 45.7546V14Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 3H31.5C37.299 3 42 7.70101 42 13.5V39H39V13.5C39 9.35786 35.6421 6 31.5 6H16V3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
