use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareAgentIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareAgentIcon(props: SquareAgentIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 29L9.55112 18.9291C9.70346 17.9153 10.3295 17.0692 11.2 16.7209C12.1486 16.3412 14.5091 16 16.0005 16C16.743 16 19.2382 16.0853 20.8 16.7024C21.6846 17.0522 22.3401 17.901 22.4937 18.9291L24 29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M26 3L6 3C4.34315 3 3 4.34315 3 6L3 26C3 27.6569 4.34315 29 6 29L26 29C27.6569 29 29 27.6569 29 26L29 6C29 4.34315 27.6569 3 26 3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 13C14.342 13 13 11.658 13 10C13 8.342 14.342 7 16 7C17.658 7 19 8.342 19 10C19 11.658 17.658 13 16 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15 16L13.5 23L16 25L18.5 23L17 16",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
        }
    }
}
