use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BowIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BowIcon(props: BowIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 21.5L11.5 14H12.5L16 21.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13.8528 8.60308L19.8294 4.28875C21.1521 3.33393 23 4.27906 23 5.91038V16.0989C23 17.7284 21.1556 18.674 19.8325 17.7228L13.8244 13.4032",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M10.1603 8.61255L4.17059 4.28875C2.84789 3.33394 0.999988 4.27906 0.999988 5.91038V16.0918C0.999988 17.7227 2.84706 18.6679 4.16986 17.714L10.1603 13.3937",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            circle {
                cx: "12",
                cy: "11",
                r: "3",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
