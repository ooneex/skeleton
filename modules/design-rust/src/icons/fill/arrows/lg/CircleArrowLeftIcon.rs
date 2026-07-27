use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleArrowLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleArrowLeftIcon(props: CircleArrowLeftIconProps) -> Element {
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
                d: "M2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM37 25.5L15.6213 25.5L25.1213 35L23 37.1213L9.87868 24L23 10.8787L25.1213 13L15.6213 22.5L37 22.5V25.5Z",
                fill: "currentColor",
            }
        }
    }
}
