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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20.5 3H28.5V11H20.5V3Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M3.5 21H11.5V29H3.5V21Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M7.5 17L7.5 7C7.5 5.34315 8.84315 4 10.5 4H11.8517C13.3646 4 14.6408 5.12661 14.8285 6.6279L17.1715 25.3721C17.3592 26.8734 18.6354 28 20.1483 28H21.5C23.1569 28 24.5 26.6569 24.5 25V15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
