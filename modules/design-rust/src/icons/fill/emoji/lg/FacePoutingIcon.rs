use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FacePoutingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FacePoutingIcon(props: FacePoutingIconProps) -> Element {
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
                d: "M2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM29 18V21H36V18H29ZM19 18H12V21H19V18ZM35.8022 34.8193L36.019 36H11.981L12.1978 34.8193C13.224 29.233 18.1166 25 24 25C29.8834 25 34.776 29.233 35.8022 34.8193Z",
                fill: "currentColor",
            }
        }
    }
}
