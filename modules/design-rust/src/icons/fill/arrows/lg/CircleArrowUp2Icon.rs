use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleArrowUp2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleArrowUp2Icon(props: CircleArrowUp2IconProps) -> Element {
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
                d: "M24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46ZM22.5 37L22.5 25L15 25L24 12L33 25L25.5 25L25.5 37L22.5 37Z",
                fill: "currentColor",
            }
        }
    }
}
