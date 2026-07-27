use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GlutesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GlutesIcon(props: GlutesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 45L21 34C21 31.7909 19.2091 30 17 30L13 30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M27 45L27 34C27 31.7909 28.7909 30 31 30L35 30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M9.5 6H38.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linejoin: "round",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M10 3C10 9.63158 3 11.8421 3 25.1053C3.21976 32.4821 5.47024 38.0248 6.24961 45H6.22266",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M38 3C38 9.63158 45 11.8421 45 25.1053C44.7802 32.4821 42.5298 38.0248 41.7504 45H41.7891",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 30H14C19.5228 30 24 25.5228 24 20V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M36 30H34C28.4772 30 24 25.5228 24 20V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
        }
    }
}
