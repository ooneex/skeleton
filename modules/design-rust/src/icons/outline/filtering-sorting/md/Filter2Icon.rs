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
                points: "3 2 29 2 19 17 19 30 13 30 13 17 3 2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
