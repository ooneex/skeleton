use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RakeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RakeIcon(props: RakeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27.995 23.5518L43.2177 8.3297C44.1941 7.35342 44.1941 5.77052 43.2178 4.79422V4.79422V4.79422C42.2415 3.8179 40.6585 3.81789 39.6822 4.79419L24.4594 20.0163",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M25.2054 26.376L21.6508 22.8214",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8.55189 24.1124C9.14867 32.3303 15.6966 38.8729 23.9168 39.4614",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14.2283 40.8547L24.1278 25.2983L23.3029 26.5947",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7.15726 33.7837L22.8411 23.9705L21.9459 24.5306",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M22.3601 44.7438L23.4207 44.3902L25.1581 26.3894L29.4564 22.0911L27.6887 20.3233L25.9209 18.5556L21.6529 22.8235L3.62174 24.5913L3.26819 25.6519",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
