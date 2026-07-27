use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BankingMobile2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BankingMobile2Icon(props: BankingMobile2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25 13.5V5C25 3.34315 23.6569 2 22 2L10 2C8.34315 2 7 3.34315 7 5L7 27C7 28.6569 8.34315 30 10 30L12 30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17.5 30V22.72H16V20.64L22 17L28 20.64V22.72H26.5V30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 22.72H28",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 30H28",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22 22.72V30",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M17.75 6.5L14.25 6.5C14.1119 6.5 14 6.38807 14 6.25C14 6.11193 14.1119 6 14.25 6L17.75 6C17.8881 6 18 6.11193 18 6.25C18 6.38807 17.8881 6.5 17.75 6.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
