use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleChevronUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleChevronUpIcon(props: CircleChevronUpIconProps) -> Element {
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
                d: "M24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46ZM15 29.1213L12.8787 27L24 15.8787L35.1213 27L33 29.1213L24 20.1213L15 29.1213Z",
                fill: "currentColor",
            }
        }
    }
}
