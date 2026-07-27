use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RectLayoutGrid3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RectLayoutGrid3Icon(props: RectLayoutGrid3IconProps) -> Element {
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
                d: "M16.5 43V16H19.5V43H16.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 4C6.68629 4 4 6.68629 4 10V38C4 41.3137 6.68629 44 10 44H38C41.3137 44 44 41.3137 44 38V10C44 6.68629 41.3137 4 38 4H10ZM7 17H41V38C41 39.6569 39.6569 41 38 41H10C8.34315 41 7 39.6569 7 38V17Z",
                fill: "currentColor",
            }
        }
    }
}
