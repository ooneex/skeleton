use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PowerLevelIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PowerLevelIcon(props: PowerLevelIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17.966 7.8465L20.2267 17.5956",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M24 7C14.1744 7 5.84973 13.3639 3 22.1564L12.3154 26C13.6002 20.7912 18.3442 16.9255 24 16.9255C29.6558 16.9255 34.3998 20.7912 35.6846 26L45 22.1564C42.1503 13.3639 33.8256 7 24 7Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 27C26 30.4348 29 34.3175 29 37.5138C29 40.886 26.7613 43 24 43C21.2387 43 19 40.886 19 37.5138C19 34.3175 22 30.4348 24 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
