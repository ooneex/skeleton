use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WheelbarrowIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WheelbarrowIcon(props: WheelbarrowIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M39 14H8.93733C6.30911 14 4.95135 17.1397 6.75144 19.0547L24.7118 38.1615C25.2148 38.6966 25.9165 39 26.6508 39V39C27.9929 39 29.1249 38.0006 29.2914 36.6689L30.5 27",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M46.0001 5.99997L41 6L37.0001 24L13.4214 34.7383L14.5001 34.247",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8.5 43C11.5376 43 14 40.5376 14 37.5C14 34.4624 11.5376 32 8.5 32C5.46243 32 3 34.4624 3 37.5C3 40.5376 5.46243 43 8.5 43Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 37.5C7 36.6716 7.67157 36 8.5 36C9.32843 36 10 36.6716 10 37.5C10 38.3284 9.32843 39 8.5 39C7.67157 39 7 38.3284 7 37.5Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 37.5C8 37.2239 8.22386 37 8.5 37C8.77614 37 9 37.2239 9 37.5C9 37.7761 8.77614 38 8.5 38C8.22386 38 8 37.7761 8 37.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
