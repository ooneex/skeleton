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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 17L2 17L2 15L14 15L14 17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 17L30 17L30 15L18 15L18 17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.0002 22.4142L31.4144 16L25.0002 9.58579L23.5859 11L28.5859 16L23.5859 21L25.0002 22.4142Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6.99985 22.4142L0.585635 16L6.99985 9.58579L8.41406 11L3.41406 16L8.41406 21L6.99985 22.4142Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 2V30H12V2H14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 2V30H18V2H20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
