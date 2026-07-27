use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UTurnToRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UTurnToRightIcon(props: UTurnToRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 3L12.5 3C7.25332 3 3.00003 7.25328 3.00002 12.5V12.5C3.00001 17.7467 7.25331 22 12.5 22L29.5 22L29 22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22.5 29L29.5 22L22.5 15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
