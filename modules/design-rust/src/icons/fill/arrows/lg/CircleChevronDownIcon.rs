use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleChevronDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleChevronDownIcon(props: CircleChevronDownIconProps) -> Element {
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
                d: "M24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2ZM15 18.8787L12.8787 21L24 32.1213L35.1213 21L33 18.8787L24 27.8787L15 18.8787Z",
                fill: "currentColor",
            }
        }
    }
}
