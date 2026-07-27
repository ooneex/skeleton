use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CanvasIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CanvasIcon(props: CanvasIconProps) -> Element {
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
                d: "M34 42H14V39H34V42Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 1V8.5H22.5V1H25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.0955 33.4734L17.9045 34.5268L13.0653 47.4313L10.2563 46.3779L15.0955 33.4734Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M32.9045 33.4734L30.0955 34.5268L34.9347 47.4313L37.7437 46.3779L32.9045 33.4734Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M44 6L44 35L4 35L4 6L44 6Z",
                fill: "currentColor",
            }
        }
    }
}
