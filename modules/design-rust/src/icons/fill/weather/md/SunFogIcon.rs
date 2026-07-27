use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SunFogIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SunFogIcon(props: SunFogIconProps) -> Element {
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
                d: "M3 20L20 20V22L3 22L3 20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 24L25 24V26H15V24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 16H18V18H12V16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 28L21 28V30H11V28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 20H29V22H23V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M5 14C5 7.92487 9.92487 3 16 3C22.0751 3 27 7.92487 27 14C27 15.4112 26.7343 16.7603 26.2501 18H20V16C20 14.8954 19.1046 14 18 14H12C10.8954 14 10 14.8954 10 16V18H5.74988C5.26573 16.7603 5 15.4112 5 14Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 24H12V26H7V24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
