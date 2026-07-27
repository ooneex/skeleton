use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleArrowUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleArrowUpIcon(props: CircleArrowUpIconProps) -> Element {
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
                d: "M2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM25.5 37V15.6213L35 25.1213L37.1213 23L24 9.87868L10.8787 23L13 25.1213L22.5 15.6213V37H25.5Z",
                fill: "currentColor",
            }
        }
    }
}
