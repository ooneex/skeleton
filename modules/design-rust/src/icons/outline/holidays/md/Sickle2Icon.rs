use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Sickle2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Sickle2Icon(props: Sickle2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11.5 20.5L8.5 23.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M29 13.5C29 7.70101 24.2812 3 18.4604 3V3.7C21.364 3.98721 24.7441 7.22448 24.7841 11.4C24.7841 15.266 21.6383 18.4 17.7577 18.4C16.4779 18.4 15.278 18.1422 14.2445 17.5466L11.5 20.5C17.8831 26.8722 29 22.6743 29 13.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6.73224 21.7322L8.5 23.5L10.2678 25.2678L6.3033 29.2322C5.327 30.2085 3.74409 30.2085 2.76778 29.2322V29.2322C1.79147 28.2559 1.79147 26.673 2.76778 25.6967L6.73224 21.7322Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
