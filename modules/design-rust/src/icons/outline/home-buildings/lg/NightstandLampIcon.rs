use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NightstandLampIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NightstandLampIcon(props: NightstandLampIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 11L16.5858 12.5858C17.3668 13.3668 18.6332 13.3668 19.4142 12.5858L19.5858 12.4142C20.3668 11.6332 21.6332 11.6332 22.4142 12.4142L22.5858 12.5858C23.3668 13.3668 24.6332 13.3668 25.4142 12.5858L25.5858 12.4142C26.3668 11.6332 27.6332 11.6332 28.4142 12.4142L28.5858 12.5858C29.3668 13.3668 30.6332 13.3668 31.4142 12.5858L33 11",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M24 18V27",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M28 33L20 33",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M34.812 17.3593L30.6 3L24 3L17.4 3L13.1879 17.3593C13.094 17.6794 13.3341 18 13.6677 18L34.3323 18C34.6659 18 34.906 17.6794 34.812 17.3593Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9 39V43H12L14 39",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M39 39V43H36L34 39",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5.5 39L42.5 39C43.8807 39 45 37.8807 45 36.5L45 29.5C45 28.1193 43.8807 27 42.5 27L5.5 27C4.11929 27 3 28.1193 3 29.5L3 36.5C3 37.8807 4.11929 39 5.5 39Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
