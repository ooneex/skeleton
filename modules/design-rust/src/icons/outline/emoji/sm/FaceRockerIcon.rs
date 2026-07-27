use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceRockerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceRockerIcon(props: FaceRockerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.5 3.06726C4.23742 4.71408 2 8.09573 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 8.09573 19.7626 4.71408 16.5 3.06726",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 0L14 6C12.741 6.62951 11.259 6.62951 10 6L11 0H13Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M15 11L17 10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9 11L7 10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 19C13.1046 19 14 17.8807 14 16.5C14 15.1193 13.1046 14 12 14C10.8954 14 10 15.1193 10 16.5C10 17.8807 10.8954 19 12 19Z",
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
