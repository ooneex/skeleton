use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MedicalCross3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MedicalCross3Icon(props: MedicalCross3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8.99998 9L9 2H15L15 9H22L22 15H15V22H9V15H2.00002L2 9H8.99998Z",
                fill: "currentColor",
            }
        }
    }
}
