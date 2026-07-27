use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderChartBarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderChartBarIcon(props: FolderChartBarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 20H4C2.89543 20 2 19.1046 2 18V5C2 3.89543 2.89543 3 4 3H10L13 6H20C21.1046 6 22 6.89543 22 8V9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18 13V21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22 16V21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 18V21",
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
