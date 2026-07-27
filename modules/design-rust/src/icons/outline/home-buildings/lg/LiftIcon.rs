use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LiftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LiftIcon(props: LiftIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29 5H4V43H29V5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16.5 5V43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M40 36.8333L43.25 32.5H36.75L40 36.8333Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M40 11.1667L43.25 15.5H36.75L40 11.1667Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            path {
                d: "M40 20C43.3137 20 46 17.3137 46 14C46 10.6863 43.3137 8 40 8C36.6863 8 34 10.6863 34 14C34 17.3137 36.6863 20 40 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M40 28C43.3137 28 46 30.6863 46 34C46 37.3137 43.3137 40 40 40C36.6863 40 34 37.3137 34 34C34 30.6863 36.6863 28 40 28Z",
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
