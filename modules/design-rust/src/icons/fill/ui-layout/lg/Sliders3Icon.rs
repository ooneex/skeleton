use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Sliders3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Sliders3Icon(props: Sliders3IconProps) -> Element {
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
                d: "M44 25.5L39 25.5L39 22.5L44 22.5L44 25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29.5 25.5L4 25.5L4 22.5L29.5 22.5L29.5 25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.5 39.5L4 39.5L4 36.5L14.5 36.5L14.5 39.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.5 11.5L4 11.5L4 8.5L14.5 8.5L14.5 11.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 39.5L24 39.5L24 36.5L44 36.5L44 39.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 11.5L24 11.5L24 8.5L44 8.5L44 11.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 3L21 3L21 17L12 17L12 3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 31L21 31L21 45L12 45L12 31Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 17L36 17L36 31L27 31L27 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
