use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LemonWedgeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LemonWedgeIcon(props: LemonWedgeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19.5421 19L37.5 19",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M19 37.5V19.5347",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M32 32L19.2372 19.2372",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6.53863 31.9914C13.5681 39.0208 24.965 39.0208 31.9945 31.9914C39.0239 24.9619 39.0239 13.565 31.9945 6.53552",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M3.00309 35.5269C11.9851 44.509 26.5479 44.509 35.53 35.5269C44.5121 26.5449 44.5121 11.9821 35.53 3L3.00309 35.5269Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
