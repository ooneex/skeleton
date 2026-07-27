use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ClapperboardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ClapperboardIcon(props: ClapperboardIconProps) -> Element {
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
                d: "M30 13H2V29H30V13ZM13 21H19V24H21V21H25V19H7V21H11V24H13V21Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.0279 11.4555L5.27893 6.02896L6.78399 4.71184L11.5329 10.1384L10.0279 11.4555Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.968 10.5418L12.2191 5.11526L13.7241 3.79814L18.4731 9.22471L16.968 10.5418Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.9081 9.62816L19.1591 4.2016L20.6642 2.88448L25.4131 8.31104L23.9081 9.62816Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0.943726 5.03159L28.7042 1.37685L29.7484 9.30841L1.98794 12.9631L0.943726 5.03159ZM3.18767 6.75342L3.70977 10.7192L27.5044 7.58657L26.9823 3.62079L3.18767 6.75342Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
