use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Filter2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Filter2Icon(props: Filter2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "1.131 1 12 17.303 12 31 20 31 20 17.303 30.869 1 1.131 1",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
