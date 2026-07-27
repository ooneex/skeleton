use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EzBarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EzBarIcon(props: EzBarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 21L5.5 18.5L5.1804 18.8196",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M21 3L18.5 5.5L18.7045 5.29551",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15.5 2.5L21.5 8.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M2.5 15.5L8.5 21.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15.6715 8.32848L15.1715 8.82848L13.798 8.93696C13.3315 8.9738 12.953 9.3292 12.8868 9.79243L12.6061 11.7575C12.5432 12.1975 12.1975 12.5432 11.7575 12.6061L9.79109 12.887C9.32848 12.9531 8.97332 13.3307 8.93575 13.7965L8.82452 15.1755L8.32452 15.6755",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
