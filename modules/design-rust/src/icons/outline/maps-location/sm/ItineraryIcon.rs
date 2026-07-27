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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 12V5C5 3.89543 5.89543 3 7 3H9.20991C10.229 3 11.0851 3.76627 11.1977 4.77914L12.8023 19.2209C12.9149 20.2337 13.771 21 14.7901 21H17C18.1046 21 19 20.1046 19 19V12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M2 16H8V22H2V16Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 2H22V8H16V2Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
