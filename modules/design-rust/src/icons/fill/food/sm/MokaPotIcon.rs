use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MokaPotIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MokaPotIcon(props: MokaPotIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 7V5H18V3H23V7C23 9.20913 21.2091 11 19 11H17.667V9H19C20.1046 8.99999 21 8.10456 21 7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M15 0V2H10V0H15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M18.1172 12H6.78906L6.05078 8.15332L4 4.78027V3H19.1172L18.1172 12Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 21.3838V23H5V21.3838L6.73633 14H18.2627L20 21.3838ZM10 16V18H12.0098V16H10Z",
                fill: "currentColor",
            }
        }
    }
}
