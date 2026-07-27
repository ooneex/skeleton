use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MeasuringCupIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MeasuringCupIcon(props: MeasuringCupIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 9V4H18V2H23V9C23 9.79565 22.6837 10.5585 22.1211 11.1211C21.5585 11.6837 20.7957 12 20 12H18V10H20C20.2652 10 20.5195 9.89457 20.707 9.70703C20.8946 9.51949 21 9.26522 21 9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 19C19 20.6569 17.6569 22 16 22H7C5.34315 22 4 20.6569 4 19V8.77637L1 3.77734V2H19V19ZM12 16V18H15V16H12ZM12 14H15V12H12V14ZM12 10H15V8H12V10Z",
                fill: "currentColor",
            }
        }
    }
}
