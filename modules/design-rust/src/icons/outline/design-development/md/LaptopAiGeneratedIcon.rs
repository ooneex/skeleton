use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LaptopAiGeneratedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LaptopAiGeneratedIcon(props: LaptopAiGeneratedIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M28 19H27.5L21.5263 11.0076L15.5798 18.3035L12.5333 15.1761L9 19.0076",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4 19V7C4 5.34315 5.34315 4 7 4H25C26.6569 4 28 5.34315 28 7V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M2 23V25C2 26.6569 3.34315 28 5 28H27C28.6569 28 30 26.6569 30 25V23H21C21 23.5523 20.5523 24 20 24H12C11.4477 24 11 23.5523 11 23H2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11 8.9L9.95 6.45L8.9 8.9L6.45 9.95L8.9 11L9.95 13.45L11 11L13.45 9.95L11 8.9Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
