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
                d: "M12 12L12 2H20L20 12H30L30 20H20V30H12V20H2.00006L2 12H12Z",
                fill: "currentColor",
            }
        }
    }
}
