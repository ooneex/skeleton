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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M1.16394 13H22.8361L21.4804 5.46854C21.2232 4.03965 19.9797 3 18.5279 3H5.47215C4.0203 3 2.7768 4.03966 2.5196 5.46854L1.16394 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 18V15H23V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18ZM6 17V19H18V17H6Z",
                fill: "currentColor",
            }
        }
    }
}
