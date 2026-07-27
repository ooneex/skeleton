use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Flag3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Flag3Icon(props: Flag3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 5.50001L8.21544 4.35163C10.5967 3.50118 13.2398 3.82656 15.3437 5.22916L15.4301 5.28675C17.0839 6.38926 19.0888 6.83667 21.0544 6.54184L28 5.50001V21.5L21.0544 22.5418C19.0888 22.8367 17.0839 22.3893 15.4301 21.2867L15.3437 21.2292C13.2398 19.8266 10.5967 19.5012 8.21544 20.3516L5 21.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5 29V3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
