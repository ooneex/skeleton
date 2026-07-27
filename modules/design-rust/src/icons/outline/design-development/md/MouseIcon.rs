use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MouseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MouseIcon(props: MouseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 2V9",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5 13L5 19C5 25.0751 9.92487 30 16 30C22.0751 30 27 25.0751 27 19L27 13C27 6.92487 22.0751 2 16 2C9.92487 2 5 6.92487 5 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13.5 11.5L13.5 13.5C13.5 14.8807 14.6193 16 16 16C17.3807 16 18.5 14.8807 18.5 13.5L18.5 11.5C18.5 10.1193 17.3807 9 16 9C14.6193 9 13.5 10.1193 13.5 11.5Z",
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
