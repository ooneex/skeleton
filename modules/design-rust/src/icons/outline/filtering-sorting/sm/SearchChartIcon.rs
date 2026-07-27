use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SearchChartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SearchChartIcon(props: SearchChartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21.5001 4.49998L13.0001 13L9.00009 9L4.00009 14L4.37924 13.6209",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15.3425 4.28002C14.0918 3.4702 12.6008 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C14.7277 19 17.8599 16.4505 18.748 13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 21L16.5 16.5L17 17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
