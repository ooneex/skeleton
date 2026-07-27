use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NightstandIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NightstandIcon(props: NightstandIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 41V45H14L16 41",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M37 41V45H34L32 41",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M7 10L7 36C7 38.7614 9.23858 41 12 41L36 41C38.7614 41 41 38.7614 41 36L41 10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7 25.5L41 25.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M43 5L5 5L5 10L43 10L43 5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 33C23 32.4477 23.4477 32 24 32C24.5523 32 25 32.4477 25 33C25 33.5523 24.5523 34 24 34C23.4477 34 23 33.5523 23 33Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 33C23 32.4477 23.4477 32 24 32C24.5523 32 25 32.4477 25 33C25 33.5523 24.5523 34 24 34C23.4477 34 23 33.5523 23 33Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 17.5C23 16.9477 23.4477 16.5 24 16.5C24.5523 16.5 25 16.9477 25 17.5C25 18.0523 24.5523 18.5 24 18.5C23.4477 18.5 23 18.0523 23 17.5Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 17.5C23 16.9477 23.4477 16.5 24 16.5C24.5523 16.5 25 16.9477 25 17.5C25 18.0523 24.5523 18.5 24 18.5C23.4477 18.5 23 18.0523 23 17.5Z",
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
