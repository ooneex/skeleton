use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleArrowDown2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleArrowDown2Icon(props: CircleArrowDown2IconProps) -> Element {
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
                d: "M24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2ZM25.5 11L25.5 23L33 23L24 36L15 23L22.5 23L22.5 11L25.5 11Z",
                fill: "currentColor",
            }
        }
    }
}
