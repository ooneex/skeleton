use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LighterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LighterIcon(props: LighterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M33 25L33 20L19 20L19 25",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 25H12L12 3L8 3C5.79086 3 4 4.79086 4 7L4 21C4 23.2091 5.79086 25 8 25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 25H39V41C39 43.2091 37.2091 45 35 45H16C13.7909 45 12 43.2091 12 41V25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 11.2319C21 10.4629 21.5556 7 21.5556 7L23.2222 7.5L26 4C26 4 31 7.80487 31 11.2319C31 14.2718 28.4373 16 26 16C23.5627 16 21 14.2718 21 11.2319Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M33 30V39",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
