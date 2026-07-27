use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AddRecipeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AddRecipeIcon(props: AddRecipeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18.4743 14H19.2931C20.7881 14 22 15.2119 22 16.7069V16.7069C22 18.0301 21.0433 19.1594 19.7381 19.377L19 19.5V22H13V19.5L12.2619 19.377C10.9567 19.1594 10 18.0301 10 16.7069V16.7069C10 15.2119 11.2119 14 12.7069 14H13.5146",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M13.5 15L13.5 14.5C13.5 13.1193 14.6193 12 16 12V12C17.3807 12 18.5 13.1193 18.5 14.5L18.5 15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 2L10.4135 2L4 8.40885L4 10",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8.5 22L4 22L4 9L11 9L11 2L20 2L20 9.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
