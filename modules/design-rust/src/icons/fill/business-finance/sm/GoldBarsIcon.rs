use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GoldBarsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GoldBarsIcon(props: GoldBarsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.07692 14L1 21H13L9.92308 14H4.07692Z",
                fill: "currentColor",
            }
            path {
                d: "M14.0769 14L11 21H23L19.9231 14H14.0769Z",
                fill: "currentColor",
            }
            path {
                d: "M9.07692 7L6 14H18L14.9231 7H9.07692Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 0V3H11V0H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.6213 3.79291L18.5 5.91423L17.0858 4.50001L19.2071 2.37869L20.6213 3.79291Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.79289 2.37869L6.91421 4.50001L5.5 5.91423L3.37868 3.79291L4.79289 2.37869Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 11L20 11L20 9L23 9L23 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 11L1 11L1 9L4 9L4 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
