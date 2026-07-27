use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BasketChartBarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BasketChartBarIcon(props: BasketChartBarIconProps) -> Element {
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
                d: "M13.7293 1.77289L5.29315 13.4855L3.67029 12.3166L12.1064 0.604004L13.7293 1.77289Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.8913 0.60376L28.1316 12.0053L26.5107 13.1768L18.2704 1.77529L19.8913 0.60376Z",
                fill: "currentColor",
            }
            path {
                d: "M31 8H1V14H31V8Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 16V30H21V16H23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 22V30H25V22H27Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 25V30H17V25H19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 18V30H29V18H31Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.91309 16H19V23H17C15.8954 23 15 23.8954 15 25V30H7.76028C5.67993 30 3.94687 28.4054 3.7741 26.3322L2.91309 16ZM12 19H10V26H12V19Z",
                fill: "currentColor",
            }
        }
    }
}
