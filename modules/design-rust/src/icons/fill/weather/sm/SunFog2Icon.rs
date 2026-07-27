use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SunFog2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SunFog2Icon(props: SunFog2IconProps) -> Element {
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
                d: "M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12V13H5V12Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 0V3H11V0H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 13L21 13L21 11L24 11L24 13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 13L-8.74228e-08 13L0 11L3 11L3 13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.1924 4.22183L19.0711 6.34315L17.6569 4.92894L19.7782 2.80762L21.1924 4.22183Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.92893 6.34317L2.80761 4.22185L4.22182 2.80763L6.34314 4.92896L4.92893 6.34317Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 16L15 16V18L2 18L2 16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 20L19 20V22L11 22V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 16H22V18H17V16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 20H9V22H5V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
