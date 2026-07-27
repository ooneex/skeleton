use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EraserIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EraserIcon(props: EraserIconProps) -> Element {
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
                d: "M11 7L11 5.49999C11 3.56699 12.567 1.99999 14.5 1.99999L33.5 1.99999C35.433 1.99999 37 3.567 37 5.49999L37 7L11 7Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 41L11 42.5C11 44.433 12.567 46 14.5 46L33.5 46C35.433 46 37 44.433 37 42.5L37 41L11 41Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 10L9 38L39 38L39 10L9 10ZM18 23H15V32H18V23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
