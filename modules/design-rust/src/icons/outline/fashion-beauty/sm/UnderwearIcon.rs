use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UnderwearIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UnderwearIcon(props: UnderwearIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.5 7.5L11.5 5H12.5L13.5 7.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23 5V8.75L22.418 8.8373C17.8662 9.52006 14.3684 13.2216 13.944 17.8047L13.8333 19H10.1667L10.056 17.8047C9.63163 13.2216 6.13376 9.52006 1.58199 8.8373L1 8.75V5H23Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
