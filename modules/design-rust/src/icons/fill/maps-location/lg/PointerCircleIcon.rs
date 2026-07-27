use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PointerCircleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PointerCircleIcon(props: PointerCircleIconProps) -> Element {
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
                d: "M24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2ZM39.4694 22.1146L14.2261 14.2261L22.1146 39.4694L27.7493 27.7493L39.4694 22.1146Z",
                fill: "currentColor",
            }
        }
    }
}
