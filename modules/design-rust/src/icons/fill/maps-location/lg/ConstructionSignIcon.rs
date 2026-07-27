use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ConstructionSignIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ConstructionSignIcon(props: ConstructionSignIconProps) -> Element {
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
                d: "M38 2V5.5H35V2H38Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M33 4H40V7H33V4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 2V5.5H10V2H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M40 35V43H33V35H40Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 35V43H8V35H15Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 4H15V7H8V4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 9V33H47V9H1ZM44 25.8972V30H40.0514L31.0514 12H37.0514L44 25.8972ZM22.4988 12L31.4988 30H25.4988L16.4988 12H22.4988ZM4 16.1074V12H7.94629L16.9463 30H10.9463L4 16.1074Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 41H42V44H31V41Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 41H17V44H6V41Z",
                fill: "currentColor",
            }
        }
    }
}
