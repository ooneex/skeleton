use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SkippingRopeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SkippingRopeIcon(props: SkippingRopeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 19V36C10 39.866 13.134 43 17 43V43C20.866 43 24 39.866 24 36V12C24 8.13401 27.134 5 31 5V5C34.866 5 38 8.13401 38 12V28",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6.5 14H13.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M41.5 33L34.5 33",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M13 19H7L6.26608 7.99114C6.12208 5.8312 7.83526 4 10 4V4C12.1647 4 13.8779 5.8312 13.7339 7.99114L13 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M35 28L41 28L41.7339 39.0089C41.8779 41.1688 40.1647 43 38 43V43C35.8353 43 34.1221 41.1688 34.2661 39.0089L35 28Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
