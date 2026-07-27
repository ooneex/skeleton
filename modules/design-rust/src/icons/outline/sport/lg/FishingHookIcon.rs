use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FishingHookIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FishingHookIcon(props: FishingHookIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 16V34C24 38.9706 28.0294 43 33 43V43C37.9706 43 42 38.9706 42 34V24L36 29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 15.0001V34C24 38.9706 19.9706 43 15 43V43C10.0294 43 6 38.9706 6 34V24.0001L12 29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 15C27.3137 15 30 12.3137 30 9C30 5.68629 27.3137 3 24 3C20.6863 3 18 5.68629 18 9C18 12.3137 20.6863 15 24 15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 15C27.3137 15 30 12.3137 30 9C30 5.68629 27.3137 3 24 3C20.6863 3 18 5.68629 18 9C18 12.3137 20.6863 15 24 15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
