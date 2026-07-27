use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SplitIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SplitIcon(props: SplitIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 12H6.06325C6.65681 12 7.21971 11.7364 7.59969 11.2804L11.4003 6.71963C11.7803 6.26365 12.3432 6 12.9367 6H21H20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M2 12H6.06325C6.65681 12 7.21971 12.2636 7.59969 12.7196L11.4003 17.2804C11.7803 17.7364 12.3432 18 12.9367 18H21H20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18 9L21 6L18 3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18 15L21 18L18 21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
