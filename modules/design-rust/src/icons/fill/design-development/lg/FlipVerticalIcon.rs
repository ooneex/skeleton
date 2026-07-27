use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FlipVerticalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FlipVerticalIcon(props: FlipVerticalIconProps) -> Element {
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
                d: "M46 22.5L46 25.5L2 25.5L2 22.5L46 22.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M40.0002 19.5L10 19.5L10 2.26855L40.0002 19.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M40 28.5L9.99993 28.5L9.99993 45.7314L40 28.5Z",
                fill: "currentColor",
            }
        }
    }
}
