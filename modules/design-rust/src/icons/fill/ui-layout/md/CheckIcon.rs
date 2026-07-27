use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckIcon(props: CheckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "10.996 27.5 1.588 16.917 3.083 15.588 11.004 24.5 28.926 4.588 30.412 5.926 10.996 27.5",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
