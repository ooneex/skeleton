use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MenuArrowRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MenuArrowRightIcon(props: MenuArrowRightIconProps) -> Element {
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
                d: "M27 37.5L6 37.5V40.5L27 40.5V37.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 7.5L6 7.5V10.5L27 10.5V7.5Z",
                fill: "currentColor",
            }
            path {
                d: "M38.3784 22.5L30.8785 15L32.9998 12.8787L44.1211 24L32.9998 35.1213L30.8785 33L38.3785 25.5H6V22.5H38.3784Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
