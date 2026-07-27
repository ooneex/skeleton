use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberTwoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberTwoIcon(props: NumberTwoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M36 43H12V40.8889V40.8889C12 36.7452 14.5704 33.0361 18.4503 31.5812L29.5112 27.4333C33.4143 25.9696 36 22.2384 36 18.07V17C36 10.3726 30.6274 5 24 5V5C17.3726 5 12 10.3726 12 17V18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
