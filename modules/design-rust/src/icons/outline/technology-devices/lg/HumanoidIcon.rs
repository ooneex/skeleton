use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HumanoidIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HumanoidIcon(props: HumanoidIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M28 28V35",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M23 28H29.5C31.433 28 33 29.567 33 31.5V31.5C33 33.433 31.433 35 29.5 35H23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M38 11V37C38 39.7614 35.7614 42 33 42H23V6H33C35.7614 6 38 8.23858 38 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M4.15804 23.8286L4.91154 29.5274C6.08131 38.3745 13.8269 45 23 45V3C11.5465 3 2.69747 12.782 4.15804 23.8286Z",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M4.21729 18.5241C10.0504 20.7185 17.8074 20.2828 23 16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M38 16H43V18.5V24C43 25.1046 42.1046 26 41 26H38",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M30.5 21C31.3284 21 32 20.3284 32 19.5C32 18.6716 31.3284 18 30.5 18C29.6716 18 29 18.6716 29 19.5C29 20.3284 29.6716 21 30.5 21Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "M43 16V6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
