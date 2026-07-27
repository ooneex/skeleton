use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BookmarkMinus2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BookmarkMinus2Icon(props: BookmarkMinus2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m14,13c-1.104,0-2-.896-2-2v-2c0-1.104.896-2,2-2h6v-3c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v19.805l9-5.625,9,5.625v-10.805h-6Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "14",
                y: "9",
                width: "10",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
