use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Mouse3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Mouse3Icon(props: Mouse3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 5V20.9999",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M9 21H39",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M23.7687 45L24.2313 45C32.8097 45 39.6409 37.8187 39.2125 29.2509L38.3325 11.6504C38.1463 7.92498 35.0714 5 31.3413 5L24 5L16.6587 5C12.9286 5 9.85375 7.92498 9.66748 11.6504L8.78745 29.2509C8.35906 37.8187 15.1903 45 23.7687 45Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
