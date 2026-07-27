use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MobileHomeAppIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MobileHomeAppIcon(props: MobileHomeAppIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17.75 6.5L14.25 6.5C14.1119 6.5 14 6.38807 14 6.25C14 6.11193 14.1119 6 14.25 6L17.75 6C17.8881 6 18 6.11193 18 6.25C18 6.38807 17.8881 6.5 17.75 6.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 30L10 30C8.34315 30 7 28.6569 7 27L7 5C7 3.34315 8.34315 2 10 2L22 2C23.6569 2 25 3.34315 25 5L25 14.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20 30V25H24V30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M28 21V23V28.5C28 29.3284 27.3284 30 26.5 30L17.5 30C16.6716 30 16 29.3284 16 28.5V23V21L22 17.5L28 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
