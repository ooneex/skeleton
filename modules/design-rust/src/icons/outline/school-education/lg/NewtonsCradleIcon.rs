use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NewtonsCradleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NewtonsCradleIcon(props: NewtonsCradleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9.00001 17L9 31V30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 17L24 31V30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M37 17L40 30L39.6538 28.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M45 7L3 7L3 12L45 12L45 7Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 41C26.7614 41 29 38.7614 29 36C29 33.2386 26.7614 31 24 31C21.2386 31 19 33.2386 19 36C19 38.7614 21.2386 41 24 41Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M41 40C43.7614 40 46 37.7614 46 35C46 32.2386 43.7614 30 41 30C38.2386 30 36 32.2386 36 35C36 37.7614 38.2386 40 41 40Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 41C11.7614 41 14 38.7614 14 36C14 33.2386 11.7614 31 9 31C6.23858 31 4 33.2386 4 36C4 38.7614 6.23858 41 9 41Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
