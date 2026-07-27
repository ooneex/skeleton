use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LinkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LinkIcon(props: LinkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12.2962 26.796L6.88814 21.388C2.88527 17.3851 2.88527 10.8952 6.88814 6.89229C10.891 2.88942 17.381 2.88942 21.3838 6.89229L27.7478 13.2563C31.7507 17.2591 31.7507 23.7491 27.7478 27.7519C26.4202 29.0795 24.819 29.9668 23.1257 30.4138",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M35.6437 21.1481L41.1074 26.6118C45.1103 30.6146 45.1103 37.1046 41.1074 41.1074C37.1045 45.1103 30.6146 45.1103 26.6117 41.1074L20.2478 34.7435C16.2449 30.7406 16.2449 24.2507 20.2478 20.2478C21.3456 19.1499 22.6306 18.3532 24 17.8575C24.3289 17.7385 24.6627 17.6368 25 17.5525",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
