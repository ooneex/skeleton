use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextStrikethroughIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextStrikethroughIcon(props: TextStrikethroughIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11.8969 12H11.103C5.74521 12 4.47706 3.97196 9.67803 2.55966C12.7238 1.73259 15.4431 3.22593 17 5.8095",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M2 12H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6 18.1905C7.55688 20.7741 10.2762 22.2674 13.322 21.4403C15.6939 20.7962 17.0606 18.3608 16.6532 16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
