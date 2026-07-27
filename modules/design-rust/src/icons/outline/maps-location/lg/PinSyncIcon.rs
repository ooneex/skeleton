use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PinSyncIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PinSyncIcon(props: PinSyncIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M43.9592 33.0514L44.0473 33.2105C42.6965 30.7037 40.0472 29 37 29C32.9204 29 29.554 32.0537 29.0619 36",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 45C24 45 8 32.5082 8 19.2911C8 8.90479 16.2007 3 24 3C31.7993 3 40 8.90479 40 19.2911C40 20.9478 39.7498 22.5922 39.312 24.2015",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            circle {
                cx: "24",
                cy: "19",
                r: "5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M44 29V33H40",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30 45V41H34",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30.0814 41.0193L29.9527 40.7895C31.3035 43.2963 33.9528 45 37 45C41.0796 45 44.446 41.9463 44.9381 38",
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
