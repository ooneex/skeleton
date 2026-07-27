use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MedicalCross2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MedicalCross2Icon(props: MedicalCross2IconProps) -> Element {
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
                d: "M38 4C41.3137 4 44 6.68629 44 10V38C44 41.3137 41.3137 44 38 44H10C6.78979 44 4.16843 41.4789 4.00781 38.3086L4 38V10C4 6.68629 6.68629 4 10 4H38ZM20 12V20H12V28H20V36H28V28H36V20H28V12H20Z",
                fill: "currentColor",
            }
        }
    }
}
