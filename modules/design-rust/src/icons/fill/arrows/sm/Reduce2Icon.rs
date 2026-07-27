use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Reduce2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Reduce2Icon(props: Reduce2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 16L3 16L3 14L21 14L21 16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 10L3 10L3 8L21 8L21 10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 0.585754L12 3.58576L9 0.585759L7.58579 1.99997L12 6.41419L16.4142 1.99997L15 0.585754Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 23.4142L12 20.4142L9 23.4142L7.58579 22L12 17.5858L16.4142 22L15 23.4142Z",
                fill: "currentColor",
            }
        }
    }
}
