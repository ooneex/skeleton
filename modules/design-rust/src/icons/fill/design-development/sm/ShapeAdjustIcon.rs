use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShapeAdjustIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShapeAdjustIcon(props: ShapeAdjustIconProps) -> Element {
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
                d: "M0 8.5C0 3.80558 3.80558 0 8.5 0C12.6826 0 16.1596 3.02098 16.8681 7H7V16.8681C3.02098 16.1596 0 12.6826 0 8.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 16.8681V22L22 22V7H16.8681C16.9548 7.48691 17 7.98817 17 8.5C17 13.1944 13.1944 17 8.5 17C7.98817 17 7.48691 16.9548 7 16.8681Z",
                fill: "currentColor",
            }
        }
    }
}
