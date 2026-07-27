use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ItineraryIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ItineraryIcon(props: ItineraryIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 25V9C11 6.79086 12.7909 5 15 5H18.399C20.446 5 22.1627 6.54547 22.377 8.58126L25.623 39.4187C25.8373 41.4545 27.554 43 29.601 43H33C35.2091 43 37 41.2091 37 39V23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5 30H18V43H5V30Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M30 5H43V18H30V5Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
