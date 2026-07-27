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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17.9999 18L18 5H30L29.9999 18L42.9999 18L43 30L30 30V43H18V30L5.00008 30L5 18L17.9999 18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
