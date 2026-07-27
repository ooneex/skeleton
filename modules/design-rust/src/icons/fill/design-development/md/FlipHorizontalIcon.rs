use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FlipHorizontalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FlipHorizontalIcon(props: FlipHorizontalIconProps) -> Element {
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
                d: "M15 31L15 1L17 1L17 31L15 31Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.0001 4.32764V25.9999H31.7485L19.0001 4.32764Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.9999 4.32764V25.9999H0.251465L12.9999 4.32764Z",
                fill: "currentColor",
            }
        }
    }
}
