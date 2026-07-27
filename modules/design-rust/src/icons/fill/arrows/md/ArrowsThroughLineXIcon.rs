use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsThroughLineXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsThroughLineXIcon(props: ArrowsThroughLineXIconProps) -> Element {
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
                d: "M17 31L17 20L15 20L15 31L17 31Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.9143 23L3.91431 16L10.9143 8.99997L9.50009 7.58576L1.08588 16L9.50009 24.4142L10.9143 23Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.0857 23L28.0857 16L21.0857 8.99997L22.4999 7.58576L30.9141 16L22.4999 24.4142L21.0857 23Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 1L15 1L15 16L17 16L17 1Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.5 17L29.5 17L29.5 15L2.5 15L2.5 17Z",
                fill: "currentColor",
            }
        }
    }
}
