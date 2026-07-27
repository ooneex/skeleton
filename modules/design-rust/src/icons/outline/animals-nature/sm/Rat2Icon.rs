use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Rat2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Rat2Icon(props: Rat2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 18H2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4.5 21L4 21.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 18H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19.5 21L20 21.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 19L12.8293 18.1707C12.8923 18.1077 12.8477 18 12.7586 18H11.2414C11.1523 18 11.1077 18.1077 11.1707 18.1707L12 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5.5 2C3.01472 2 1 4.01472 1 6.5C1 8.82541 2.73721 10.736 5 10.9725C5 14.3939 5.41298 18.6398 10.3676 21.6376C11.3698 22.244 12.6302 22.244 13.6324 21.6376C18.587 18.6398 19 14.3939 19 10.9725C21.2628 10.736 23 8.82541 23 6.5C23 4.01472 20.9853 2 18.5 2C16.0147 2 14 4.01472 14 6.5V7H10V6.5C10 4.01472 7.98528 2 5.5 2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.5 15.5C10.1904 15.5 10.75 14.9404 10.75 14.25C10.75 13.5596 10.1904 13 9.5 13C8.80964 13 8.25 13.5596 8.25 14.25C8.25 14.9404 8.80964 15.5 9.5 15.5Z",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            path {
                d: "M14.5 15.5C15.1904 15.5 15.75 14.9404 15.75 14.25C15.75 13.5596 15.1904 13 14.5 13C13.8096 13 13.25 13.5596 13.25 14.25C13.25 14.9404 13.8096 15.5 14.5 15.5Z",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
        }
    }
}
