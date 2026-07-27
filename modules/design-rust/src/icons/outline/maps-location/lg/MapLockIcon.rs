use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MapLockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MapLockIcon(props: MapLockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M31 22V12V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 5V36",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M22 38.5L17 36L3 41V10L17 5L31 12L45 7V26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M42.5 34H29.5C28.1193 34 27 35.1193 27 36.5V42.5C27 43.8807 28.1193 45 29.5 45H42.5C43.8807 45 45 43.8807 45 42.5V36.5C45 35.1193 43.8807 34 42.5 34Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M31.5 34V30.5C31.5 28.0147 33.5147 26 36 26V26C38.4853 26 40.5 28.0147 40.5 30.5V34",
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
