use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleUserMinusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleUserMinusIcon(props: CircleUserMinusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M31 6.5L20 6.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7.29382 26.9644C9.01173 24.0003 12.2671 22 16 22C19.7328 22 22.9882 24.0003 24.7061 26.9644",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M16 18.5C18.2091 18.5 20 16.7091 20 14.5C20 12.2909 18.2091 10.5 16 10.5C13.7909 10.5 12 12.2909 12 14.5C12 16.7091 13.7909 18.5 16 18.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 14.9703 29.8888 13.9665 29.6778 13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
