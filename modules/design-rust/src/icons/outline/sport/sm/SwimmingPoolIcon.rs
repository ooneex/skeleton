use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SwimmingPoolIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SwimmingPoolIcon(props: SwimmingPoolIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6 6H17",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6 10H17",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6 14H17",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M21.5308 20.5C21.057 21.1156 20.3148 21.5 19.5 21.5C18.3246 21.5 17.3 20.7 17.0149 19.5597L17 19.5L16.9851 19.5597C16.7 20.7 15.6754 21.5 14.5 21.5C13.3246 21.5 12.3 20.7 12.0149 19.5597L12 19.5L11.9851 19.5597C11.7 20.7 10.6754 21.5 9.50001 21.5C8.3246 21.5 7.30002 20.7 7.01494 19.5597L7.00001 19.5L6.98508 19.5597C6.7 20.7 5.67543 21.5 4.50001 21.5C3.68527 21.5 2.94299 21.1156 2.46924 20.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6 16V4C6 2.89543 6.89543 2 8 2V2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 16V4C17 2.89543 17.8954 2 19 2V2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
