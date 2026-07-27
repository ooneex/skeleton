use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Message2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Message2Icon(props: Message2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M40 7H8C5.23858 7 3 9.23858 3 12V30C3 32.7614 5.23858 35 8 35H17L24 44L31 35H40C42.7614 35 45 32.7614 45 30V12C45 9.23858 42.7614 7 40 7Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
