use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Camping2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Camping2Icon(props: Camping2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13.3313 9L13 9.5L17.3077 3L21.9231 12.5714L20.1923 13.1071L22.5 20H21.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10.6687 9L11 9.5L6.69231 3L2.07693 12.5714L3.8077 13.1071L1.50001 20H2.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 13C12 13 17.5 13.7778 17.5 21H6.5C6.5 13.7778 12 13 12 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 13V21",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
        }
    }
}
