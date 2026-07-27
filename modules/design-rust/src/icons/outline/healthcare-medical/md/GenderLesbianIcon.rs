use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GenderLesbianIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GenderLesbianIcon(props: GenderLesbianIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24.8431 8.65732L30.5001 3.00055",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19.5 22C23.6421 22 27 18.6421 27 14.5C27 10.3579 23.6421 7 19.5 7C15.3579 7 12 10.3579 12 14.5C12 16.7547 12.9949 18.777 14.5697 20.1519L14.5391 20.125",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9.49988 22L9.49976 30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.5 22C13.6421 22 17 18.6421 17 14.5C17 10.3579 13.6421 7 9.5 7C5.35786 7 2 10.3579 2 14.5C2 18.6421 5.35786 22 9.5 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6.5 27H12.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M30.5 7.24264L26.2573 3",
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
