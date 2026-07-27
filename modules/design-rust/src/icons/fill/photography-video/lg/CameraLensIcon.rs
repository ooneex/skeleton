use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CameraLensIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CameraLensIcon(props: CameraLensIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M41.7024 33.0424C48.0174 28.668 48.0174 19.332 41.7024 14.9576L39.7168 13.5821C38.8962 13.0137 38.6204 11.9271 39.0706 11.0361L42.6257 4H26L26 44H42.6257L39.0706 36.9639C38.6204 36.0729 38.8962 34.9863 39.7168 34.4179L41.7024 33.0424Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 39L23 9H8C4.68629 9 2 11.6863 2 15V33C2 36.3137 4.68629 39 8 39L23 39ZM20 19V16H10V19H20ZM20 32H10V29H20V32ZM20 25.5V22.5H10V25.5H20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
