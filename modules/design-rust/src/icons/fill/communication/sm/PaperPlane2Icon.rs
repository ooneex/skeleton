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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: ".321 9.172 7.485 14.29 14 10 9.71 16.515 14.828 23.679 22.081 1.919 .321 9.172",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
