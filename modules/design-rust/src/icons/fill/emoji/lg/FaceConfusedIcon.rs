use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceConfusedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceConfusedIcon(props: FaceConfusedIconProps) -> Element {
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
                d: "M24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2ZM15 27V30H33V27H15ZM13 18C13 16.3431 14.3431 15 16 15C17.6569 15 19 16.3431 19 18C19 19.6569 17.6569 21 16 21C14.3431 21 13 19.6569 13 18ZM32 14C29.7909 14 28 15.7909 28 18C28 20.2091 29.7909 22 32 22C34.2091 22 36 20.2091 36 18C36 15.7909 34.2091 14 32 14Z",
                fill: "currentColor",
            }
        }
    }
}
