use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartPiePercentageIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartPiePercentageIcon(props: ChartPiePercentageIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 22C17.5228 22 22 17.5228 22 12H12V2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 7.5C23 6.67157 22.3284 6 21.5 6C20.6716 6 20 6.67157 20 7.5C20 8.32843 20.6716 9 21.5 9C22.3284 9 23 8.32843 23 7.5Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            path {
                d: "M18 2.5C18 1.67157 17.3284 1 16.5 1C15.6716 1 15 1.67157 15 2.5C15 3.32843 15.6716 4 16.5 4C17.3284 4 18 3.32843 18 2.5Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            path {
                d: "M16.5 7.5L21.5 2.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
