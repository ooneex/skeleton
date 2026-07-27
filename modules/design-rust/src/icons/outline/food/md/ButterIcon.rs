use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ButterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ButterIcon(props: ButterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29 20L28.3216 23.3922C28.1346 24.3271 27.3138 25 26.3604 25H5.63961C4.68625 25 3.86542 24.3271 3.67845 23.3922L3 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 7V12.5C16 13.8807 17.1193 15 18.5 15V15C19.8807 15 21 13.8807 21 12.5V7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4 20V10C4 8.34315 5.34315 7 7 7H25C26.6569 7 28 8.34315 28 10V20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M1 20H31",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
