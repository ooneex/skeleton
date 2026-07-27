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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 5.5L13 18.5L11 18.5L11 5.5L13 5.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 3L3 3L3 0.999999L21 1L21 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 23L3 23L3 21L21 21L21 23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.08576 16L12 20.9142L16.9142 16L15.5 14.5858L12 18.0858L8.49997 14.5858L7.08576 16Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.08576 7.99997L12 3.08576L16.9142 7.99997L15.5 9.41418L12 5.91418L8.49997 9.41418L7.08576 7.99997Z",
                fill: "currentColor",
            }
        }
    }
}
