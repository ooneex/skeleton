use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ResizeYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ResizeYIcon(props: ResizeYIconProps) -> Element {
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
                d: "M15 26.5L15 5.5L17 5.5L17 26.5L15 26.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.58569 21.5L15.9999 27.9142L22.4141 21.5L20.9999 20.0858L15.9999 25.0858L10.9999 20.0858L9.58569 21.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.58569 10.5L15.9999 4.08576L22.4141 10.5L20.9999 11.9142L15.9999 6.91418L10.9999 11.9142L9.58569 10.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29 3L3 3L3 0.999999L29 1L29 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29 31L3 31L3 29L29 29L29 31Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
