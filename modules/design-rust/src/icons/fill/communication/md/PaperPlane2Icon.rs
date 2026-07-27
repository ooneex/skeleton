use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PaperPlane2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PaperPlane2Icon(props: PaperPlane2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: ".636 10.681 11.489 17.587 18.875 13.125 14.413 20.511 21.319 31.364 30.511 1.489 .636 10.681",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
