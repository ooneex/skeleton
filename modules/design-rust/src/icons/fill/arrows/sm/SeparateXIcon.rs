use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SeparateXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SeparateXIcon(props: SeparateXIconProps) -> Element {
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
                d: "M22 11L14.1515 11L13 11L13 13L22 13L22 11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 11L3.15151 11L2.00001 11L2.00002 13L11 13L11 11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 22L9 2L11 2L11 22L9 22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 22L13 2L15 2L15 22L13 22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.0858 15.5L20.5858 12L17.0858 8.50001L18.5 7.08579L23.4142 12L18.5 16.9142L17.0858 15.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6.91421 15.5L3.41422 12L6.91422 8.50001L5.50001 7.08579L0.585793 12L5.49999 16.9142L6.91421 15.5Z",
                fill: "currentColor",
            }
        }
    }
}
