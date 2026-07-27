use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShowersIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShowersIcon(props: ShowersIconProps) -> Element {
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
                d: "M28.4142 5L14 19.4142L12.5858 18L27 3.58578L28.4142 5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.4142 4L3.00003 17.4142L1.58582 16L15 2.58578L16.4142 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29.4142 17L16 30.4142L14.5858 29L28 15.5858L29.4142 17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.9142 21.5L9.50003 23.9142L8.08582 22.5L10.5 20.0858L11.9142 21.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
