use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsCrossIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsCrossIcon(props: ArrowsCrossIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M28.2928 2.29286L29.707 3.70708L19.4999 13.9142L18.0857 12.5L28.2928 2.29286Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 19L30 30L19 30L19 28L28 28L28 19L30 19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 13L30 1.99997L19 1.99997L19 3.99997L28 3.99997L28 13L30 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1.58583 3.00003L28.2929 29.7071L29.7072 28.2929L3.00005 1.58582L1.58583 3.00003Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1.58576 29L12.5 18.0858L13.9142 19.5L2.99997 30.4142L1.58576 29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
