use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HexagonUserIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HexagonUserIcon(props: HexagonUserIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.93207 26C9.75194 23.5746 12.688 22 16 22C19.3119 22 22.248 23.5746 24.0679 26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M16 18.5C18.2091 18.5 20 16.7091 20 14.5C20 12.2909 18.2091 10.5 16 10.5C13.7909 10.5 12 12.2909 12 14.5C12 16.7091 13.7909 18.5 16 18.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M16 1.5L29 8.75V23.25L16 30.5L3 23.25V8.75L16 1.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
        }
    }
}
