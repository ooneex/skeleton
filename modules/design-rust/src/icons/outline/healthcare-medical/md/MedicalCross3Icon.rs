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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11.9999 12L12 3H20L19.9999 12H28.9999L29 20H20V29H12V20H3.00002L2.99997 12H11.9999Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
