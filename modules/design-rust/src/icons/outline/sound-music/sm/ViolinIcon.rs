use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ViolinIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ViolinIcon(props: ViolinIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 21L18.7213 18.7213",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.0392 19.075C11.7416 17.1432 14.6767 13.1301 17.2718 14.3275C19.7436 12.2713 19.2504 9.01367 17.1162 6.88229C14.9823 4.75122 11.7248 4.25565 9.66705 6.72674C10.9093 9.41597 6.9606 12.2152 4.91708 9.95772C1.30902 12.1549 1.25218 16.9113 4.168 19.8312C7.08145 22.7487 11.858 22.6955 14.0392 19.075Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 9.00002L21.5 2.50001L21.1734 2.82661",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 18L4 20L4.5 19.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 2L22 3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 3L5.27723 5.27723",
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
