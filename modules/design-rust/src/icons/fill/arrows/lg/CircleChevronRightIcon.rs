use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleChevronRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleChevronRightIcon(props: CircleChevronRightIconProps) -> Element {
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
                d: "M24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2ZM18.8787 15L21 12.8787L32.1213 24L21 35.1213L18.8787 33L27.8787 24L18.8787 15Z",
                fill: "currentColor",
            }
        }
    }
}
