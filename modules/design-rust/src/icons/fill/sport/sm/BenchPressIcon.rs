use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BenchPressIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BenchPressIcon(props: BenchPressIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 6V8H0V6H4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M24 6V8H20V6H24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M4 12L2 12L2 2L4 2L4 12Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M20 12L22 12L22 2L20 2L20 12Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 17.7637V23H17V19H7V23H5V17.7637L7.38184 13H16.6182L19 17.7637Z",
                fill: "currentColor",
            }
            path {
                d: "M18 6V8H6V6H18Z",
                fill: "currentColor",
            }
        }
    }
}
