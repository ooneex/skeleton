use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HandballIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HandballIcon(props: HandballIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 17L17.1422 21L18.9997 23.3826C19.7147 24.2998 19.4994 25.6313 18.5318 26.2764L13.9602 29.3241L12.546 27.2028L15.0208 24.7279L12.0226 22.4367L4.76784 27.9099L3.00003 26.1421L16.9024 12.2397",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M23.5 13C24.8807 13 26 11.8807 26 10.5C26 9.11929 24.8807 8 23.5 8C22.1193 8 21 9.11929 21 10.5C21 11.8807 22.1193 13 23.5 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 3L17 12L21 17L30 17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 9C9.65685 9 11 7.65685 11 6C11 4.34315 9.65685 3 8 3C6.34315 3 5 4.34315 5 6C5 7.65685 6.34315 9 8 9Z",
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
