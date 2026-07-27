use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ScaleFromBottomLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ScaleFromBottomLeftIcon(props: ScaleFromBottomLeftIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 18.0002L14 29.0002L12 29.0002L3 29.0002L3 20.0002L3 18.0002L14 18.0002Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28 4L4 3.99999L4 28L28 28L28 4ZM30 30L2 30L2 1.99999L30 2L30 30Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 16.4143L24.7071 8.70718L23.2929 7.29297L15.5858 15.0001L17 16.4143Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 9L23 9L23 16L25 16L25 7L16 7L16 9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
