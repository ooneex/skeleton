use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BookmarkPlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BookmarkPlusIcon(props: BookmarkPlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m25,1H7c-2.206,0-4,1.794-4,4v26.869l13-8.667,13,8.667V5c0-2.206-1.794-4-4-4Zm-4,12h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
