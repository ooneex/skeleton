use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserCheckIcon(props: UserCheckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27 24.2336C26.0244 24.08 25.0221 24 24 24C14.0595 24 6 31.5622 6 40.8894C12.1663 42.3355 18.3331 43.0385 24.5 42.9984",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M36 44C40.9706 44 45 39.9706 45 35C45 30.0294 40.9706 26 36 26C31.0294 26 27 30.0294 27 35C27 39.9706 31.0294 44 36 44Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M32 35.5L34.5 38L40 32",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 19C28.1421 19 31.5 15.6421 31.5 11.5C31.5 7.35786 28.1421 4 24 4C19.8579 4 16.5 7.35786 16.5 11.5C16.5 15.6421 19.8579 19 24 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
