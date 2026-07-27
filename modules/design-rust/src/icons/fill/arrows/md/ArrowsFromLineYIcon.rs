use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsFromLineYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsFromLineYIcon(props: ArrowsFromLineYIconProps) -> Element {
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
                d: "M9.08588 24.5L16.0001 31.4142L22.9143 24.5L21.5001 23.0858L16.0001 28.5858L10.5001 23.0858L9.08588 24.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.5001 8.91418L16.0001 3.41418L10.5001 8.91418L9.08588 7.49997L16.0001 0.585757L22.9143 7.49997L21.5001 8.91418Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 15L2 15L2 17L30 17L30 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 2.00007L15 2L15 12.0001L17 12.0001L17 2.00007Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 20L15 30L17 30L17 20L15 20Z",
                fill: "currentColor",
            }
        }
    }
}
