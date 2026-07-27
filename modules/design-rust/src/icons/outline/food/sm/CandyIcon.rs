use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CandyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CandyIcon(props: CandyIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18.8216 13.2858L22.1678 16.2603C22.4903 16.5469 23 16.318 23 15.8866V8.11342C23 7.682 22.4903 7.45309 22.1678 7.73972L18.8216 10.7142",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5.16467 13.2981L1.83216 16.2603C1.50971 16.5469 0.99998 16.318 0.99998 15.8866V8.11342C0.99998 7.682 1.50971 7.45309 1.83216 7.73972L5.16467 10.7019",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12 18C15.866 18 19 15.3137 19 12C19 8.68629 15.866 6 12 6C8.13401 6 5 8.68629 5 12C5 15.3137 8.13401 18 12 18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
