use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RotateImageClockwiseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RotateImageClockwiseIcon(props: RotateImageClockwiseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17.5 27C19.433 27 21 25.433 21 23.5C21 21.567 19.433 20 17.5 20C15.567 20 14 21.567 14 23.5C14 25.433 15.567 27 17.5 27Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 0.878662L24.1213 9.99998H11.5C7.35784 9.99998 4 13.3578 4 17.5V21H1V17.5C1 11.701 5.70098 6.99998 11.5 6.99998H15V0.878662Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 13C9.68629 13 7 15.6863 7 19V36C7 39.3137 9.68629 42 13 42H36C39.3137 42 42 39.3137 42 36V19C42 15.6863 39.3137 13 36 13H13ZM10 19C10 17.3431 11.3431 16 13 16H36C37.6569 16 39 17.3431 39 19V31.5859L29.9544 22.5403L15.4311 39H13C11.3431 39 10 37.6569 10 36V19Z",
                fill: "currentColor",
            }
        }
    }
}
