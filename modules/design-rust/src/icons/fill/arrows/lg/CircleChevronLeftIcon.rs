use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleChevronLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleChevronLeftIcon(props: CircleChevronLeftIconProps) -> Element {
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
                d: "M24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2ZM29.1213 15L27 12.8787L15.8787 24L27 35.1213L29.1213 33L20.1213 24L29.1213 15Z",
                fill: "currentColor",
            }
        }
    }
}
