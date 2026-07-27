use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberOneIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberOneIcon(props: NumberOneIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17 4.24023L9.28516 9.89746L8.10254 8.28516L16.4082 2.19336L16.6729 2H19V30H17V4.24023Z",
                fill: "currentColor",
            }
        }
    }
}
