use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HandSanitizerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HandSanitizerIcon(props: HandSanitizerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.5 3V9H22.5V3L25.5 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M15 8V12H33V8H15Z",
                fill: "currentColor",
            }
            path {
                d: "M7 8C7 4.68629 9.68629 2 13 2H35V5H13C11.3431 5 10 6.34315 10 8V10H7V8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M35 15C38.3137 15 41 17.6863 41 21V40C41 43.3137 38.3137 46 35 46H13C9.68629 46 7 43.3137 7 40V21C7 17.6863 9.68629 15 13 15H35ZM21 22V28H15V34H21V40H27V34H33V28H27V22H21Z",
                fill: "currentColor",
            }
        }
    }
}
