use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BagChartBarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BagChartBarIcon(props: BagChartBarIconProps) -> Element {
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
                d: "M16 2C13.7913 2 12 3.79128 12 6V14H10V6C10 2.68672 12.6867 0 16 0C19.3133 0 22 2.68672 22 6V14H20V6C20 3.79128 18.2087 2 16 2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 16V30H20V16H22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26 22V30H24V22H26Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 25V30H16V25H18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 18V30H28V18H30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M4.99992 8V15.8861L2.87351 25.1006C2.2951 27.607 4.19873 30 6.77107 30H14V25C14 23.8954 14.8954 23 16 23H18V16C18 14.8954 18.8954 14 20 14H22C23.1046 14 24 14.8954 24 16V20H26V18C26 17.2597 26.4022 16.6134 26.9999 16.2676V8H4.99992Z",
                fill: "currentColor",
            }
        }
    }
}
