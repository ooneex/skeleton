use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BookmarkMinusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BookmarkMinusIcon(props: BookmarkMinusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m18,1H6c-1.654,0-3,1.346-3,3v19.805l9-5.625,9,5.625V4c0-1.654-1.346-3-3-3Zm-2,10h-8v-2h8v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
