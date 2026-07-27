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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m14,5H6c-1.654,0-3,1.346-3,3v15.869l7-4.667,7,4.667v-15.869c0-1.654-1.346-3-3-3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m21,19h-2V6c0-1.654-1.346-3-3-3h-8V1h8c2.757,0,5,2.243,5,5v13Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
