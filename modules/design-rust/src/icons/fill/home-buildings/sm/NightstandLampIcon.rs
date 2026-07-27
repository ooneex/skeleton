use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NightstandLampIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NightstandLampIcon(props: NightstandLampIconProps) -> Element {
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
                d: "M13 7V12H11V7H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 19V23H4V19H6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 19V23H18V19H20Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 18.5V16.5C23 15.1193 21.8807 14 20.5 14L3.5 14C2.11929 14 1 15.1193 1 16.5V18.5C1 19.8807 2.11929 21 3.5 21L20.5 21C21.8807 21 23 19.8807 23 18.5ZM15 18V16H9V18H15Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.7794 7.08792C18.0532 8.04614 17.3337 9 16.3371 9L7.66283 9C6.66626 9 5.94677 8.04614 6.22054 7.08792L8.24566 -3.42272e-07L15.7543 -1.00248e-07L17.7794 7.08792Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
