use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChessBishopIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChessBishopIcon(props: ChessBishopIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 5C25.1046 5 26 4.10457 26 3C26 1.89543 25.1046 1 24 1C22.8954 1 22 1.89543 22 3C22 4.10457 22.8954 5 24 5Z",
                fill: "currentColor",
            }
            path {
                d: "M24 17.5C20.6863 17.5 18 15.5327 18 11.6667C18 7.80067 20.6863 3.5 24 3.5C27.3137 3.5 30 7.80067 30 11.6667C30 15.5327 27.3137 17.5 24 17.5Z",
                fill: "currentColor",
            }
            path {
                d: "M42 46H6V44C6 41.2386 8.23858 39 11 39H37C39.7614 39 42 41.2386 42 44V46Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M34 16V20H14V16H34Z",
                fill: "currentColor",
            }
            path {
                d: "M28.0283 23C28.2808 27.6711 30.2935 32.0887 33.6836 35.3477L34.3623 36H13.6377L14.3164 35.3477C17.7065 32.0887 19.7192 27.6711 19.9717 23H28.0283Z",
                fill: "currentColor",
            }
        }
    }
}
