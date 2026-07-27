use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RotateImageClockwiseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RotateImageClockwiseIcon(props: RotateImageClockwiseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 8L19 8C20.1046 8 21 8.89543 21 10V19C21 20.1046 20.1046 21 19 21H7C5.89543 21 5 20.1046 5 19V10C5 8.89543 5.89543 8 7 8Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 21L15.5 12L21 17.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M7 1.5L9.5 4C9.0578 4 7.59256 4 6.00026 4C3.23883 4 1 6.23858 1 9V10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9.5 13C9.77614 13 10 12.7761 10 12.5C10 12.2239 9.77614 12 9.5 12C9.22386 12 9 12.2239 9 12.5C9 12.7761 9.22386 13 9.5 13Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
            }
        }
    }
}
