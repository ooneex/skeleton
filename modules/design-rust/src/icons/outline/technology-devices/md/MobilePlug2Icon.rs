use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MobilePlug2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MobilePlug2Icon(props: MobilePlug2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 25L16 30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13 17L13 13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 17L19 13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M11 17L11 20C11 22.7614 13.2386 25 16 25C18.7614 25 21 22.7614 21 20L21 17L11 17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 30L10 30C8.34315 30 7 28.6569 7 27L7 5C7 3.34315 8.34315 2 10 2L22 2C23.6569 2 25 3.34315 25 5L25 27C25 28.6569 23.6569 30 22 30L20 30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17.75 6.5L14.25 6.5C14.1119 6.5 14 6.38807 14 6.25C14 6.11193 14.1119 6 14.25 6H16L17.75 6C17.8881 6 18 6.11193 18 6.25C18 6.38807 17.8881 6.5 17.75 6.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
