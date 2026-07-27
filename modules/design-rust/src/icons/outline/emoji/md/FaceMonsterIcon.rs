use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceMonsterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceMonsterIcon(props: FaceMonsterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 19C19.3137 19 22 16.3137 22 13C22 9.68629 19.3137 7 16 7C12.6863 7 10 9.68629 10 13C10 16.3137 12.6863 19 16 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            circle {
                cx: "16",
                cy: "13",
                r: "2",
                fill: "currentColor",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M13 24H19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
