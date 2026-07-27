use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WaterTap2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WaterTap2Icon(props: WaterTap2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M43 24V28H36V24",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5 15V5H29V9L16 10V15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M39.5 33.5C41.5775 35.3333 43.5 38.0833 43.5 40.4455C43.5 42.9377 41.709 44.5 39.5 44.5C37.291 44.5 35.5 42.9377 35.5 40.4455C35.5 38.0833 37.4438 35.3333 39.5 33.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M38 15H5V43L20 43V36C20 29.3726 25.3726 24 32 24L43 24V20C43 17.2386 40.7614 15 38 15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
