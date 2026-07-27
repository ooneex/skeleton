use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextOutdentRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextOutdentRightIcon(props: TextOutdentRightIconProps) -> Element {
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
                d: "M44.4987 25.5V22.5H26.9987V25.5H44.4987Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.99866 28.5H20.9987V31.5H3.99866V28.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.99866 40.5H43.9987V43.5H3.99866V40.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.99866 16.5H20.9987V19.5H3.99866V16.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.99866 4.5H43.9987V7.5H3.99866V4.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M33.185 33.1924L42.3773 24L33.185 14.8076L35.3063 12.6863L46.62 24L35.3063 35.3137L33.185 33.1924Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
