use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AirplayIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AirplayIcon(props: AirplayIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M38 38H40C42.7614 38 45 35.7614 45 33V12C45 9.23858 42.7614 7 40 7H8C5.23858 7 3 9.23858 3 12V33C3 35.7614 5.23858 38 8 38H10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 43H35L24 26L13 43Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
