use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UTurnToRight2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UTurnToRight2Icon(props: UTurnToRight2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.5 3L16 3L6 3C4.34315 3 3 4.34315 3 6L3 20C3 21.6569 4.34315 23 6 23L29 23L28.5 23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22 16L29 23L22 30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
