use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HardDriveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HardDriveIcon(props: HardDriveIconProps) -> Element {
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
                d: "M2 36C2 39.3137 4.68629 42 8 42H40C43.3137 42 46 39.3137 46 36V29H2V36ZM10 32V35H38V32H10Z",
                fill: "currentColor",
            }
            path {
                d: "M45.6561 26H2.34399L5.05532 10.9371C5.56972 8.07931 8.05672 6 10.9604 6H37.0397C39.9434 6 42.4304 8.07931 42.9448 10.9371L45.6561 26Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
