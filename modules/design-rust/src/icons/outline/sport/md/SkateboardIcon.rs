use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SkateboardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SkateboardIcon(props: SkateboardIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18.1213 9.63605L22.3639 13.8787",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9.63605 18.1213L13.8787 22.364",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16.7071 5.39338L5.3934 16.7071C2.65973 19.4408 2.65973 23.8729 5.3934 26.6066C8.12707 29.3403 12.5592 29.3403 15.2929 26.6066L26.6066 15.2929C29.3403 12.5592 29.3403 8.12706 26.6066 5.39339C23.8729 2.65972 19.4408 2.65971 16.7071 5.39338Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16.7071 11.0502L19.5355 8.2218",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8.22184 19.5355L11.0503 16.7071",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20.9497 15.2929L23.7782 12.4645",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12.4645 23.7782L15.2929 20.9498",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
