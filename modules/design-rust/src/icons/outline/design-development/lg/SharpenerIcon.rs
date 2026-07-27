use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SharpenerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SharpenerIcon(props: SharpenerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17 45.0001V35C17 31.134 20.134 28 24 28V28C27.866 28 31 31.134 31 35V45.0001",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M7 45L41 45L41 31L39.9397 30.8485C36.5315 30.3616 34 27.4428 34 24C34 20.5572 36.5315 17.6384 39.9397 17.1515L41 17L41 3L7 3L7 17L8.0603 17.1515C11.4685 17.6384 14 20.5572 14 24C14 27.4428 11.4685 30.3616 8.06031 30.8485L7 31L7 45Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 36C24.5523 36 25 35.5523 25 35C25 34.4477 24.5523 34 24 34C23.4477 34 23 34.4477 23 35C23 35.5523 23.4477 36 24 36Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
        }
    }
}
