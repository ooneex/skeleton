use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BedIcon(props: BedIconProps) -> Element {
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
                d: "M3 26H45V37H3V26Z",
                fill: "currentColor",
            }
            path {
                d: "M8 16H13C16.3137 16 19 18.6863 19 22V23H8V16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 8V42H5V8H2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M46 20L46 42L43 42L43 20L46 20Z",
                fill: "currentColor",
            }
        }
    }
}
