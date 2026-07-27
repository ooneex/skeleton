use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileGalleryIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileGalleryIcon(props: FileGalleryIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 15H17V18H14V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.95711 1.87868C9.51972 1.31607 10.2828 1 11.0784 1H18C19.6569 1 21 2.34315 21 4V13H14C12.8954 13 12 13.8954 12 15V23H6C4.34315 23 3 21.6569 3 20V9.07843C3 8.28278 3.31607 7.51972 3.87868 6.95711L8.95711 1.87868ZM5 9H11V3L5 9Z",
                fill: "currentColor",
            }
            path {
                d: "M14 20H17V23H14V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M19 15H22V18H19V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M19 20H22V23H19V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
