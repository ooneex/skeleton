use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ResizeY2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ResizeY2Icon(props: ResizeY2IconProps) -> Element {
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
                d: "M3 21L21 21L21 23L3 23L3 21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 1L21 0.999999L21 3L3 3L3 1Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.9142 7.99997L12 3.08576L7.08582 7.99997L8.50003 9.41418L12 5.91418L15.5 9.41418L16.9142 7.99997Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.9142 16L12 20.9142L7.08582 16L8.50003 14.5858L12 18.0858L15.5 14.5858L16.9142 16Z",
                fill: "currentColor",
            }
        }
    }
}
