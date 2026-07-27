use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SportsFanIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SportsFanIcon(props: SportsFanIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11.5 21L12.746 21.2769C14.8892 21.7532 17.1108 21.7532 19.254 21.2769L20.5 21",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 18C17.3807 18 18.5 16.8807 18.5 15.5C18.5 14.1193 17.3807 13 16 13C14.6193 13 13.5 14.1193 13.5 15.5C13.5 16.8807 14.6193 18 16 18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20.0352 29H20L20.5 21L26.3538 15.5965",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11.9649 29H12L11.5 21L5.64932 15.5994",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M2 12.684C10.989 9.09862 21.011 9.09862 30 12.684V5.58398C20.9846 2.13867 11.0154 2.13867 2 5.58398V12.684Z",
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
