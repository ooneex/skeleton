use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberThreeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberThreeIcon(props: NumberThreeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 3L17 3V3.46226L8.5 10.7143V11.0101H13.005C15.7637 11.0101 18 13.2464 18 16.005V16.005C18 18.7637 15.7637 21 13.005 21H7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
