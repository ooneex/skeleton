use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleUserSparkleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleUserSparkleIcon(props: CircleUserSparkleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.29382 26.9644C9.01173 24.0003 12.2671 22 16 22C19.7328 22 22.9882 24.0003 24.7061 26.9644",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18.25 10.75L16 5.5L13.75 10.75L8.5 13L13.75 15.25L16 20.5L18.25 15.25L23.5 13L18.25 10.75Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-stroke": "none",
                "data-cap": "butt",
            }
        }
    }
}
