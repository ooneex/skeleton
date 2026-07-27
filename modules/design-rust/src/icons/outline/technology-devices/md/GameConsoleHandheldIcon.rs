use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GameConsoleHandheldIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GameConsoleHandheldIcon(props: GameConsoleHandheldIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 25L28 25C29.1046 25 30 24.1046 30 23L30 9.00002C30 7.89545 29.1046 7.00002 28 7.00002L4 7.00001C2.89543 7.00001 2 7.89544 2 9.00001L2 23C2 24.1046 2.89543 25 4 25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7 11.0133L6 11.0133",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M26 21L25 21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 11H11V21H21V11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6.5 22C7.32843 22 8 21.3284 8 20.5C8 19.6716 7.32843 19 6.5 19C5.67157 19 5 19.6716 5 20.5C5 21.3284 5.67157 22 6.5 22Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M25.5 13C26.3284 13 27 12.3284 27 11.5C27 10.6716 26.3284 10 25.5 10C24.6716 10 24 10.6716 24 11.5C24 12.3284 24.6716 13 25.5 13Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
