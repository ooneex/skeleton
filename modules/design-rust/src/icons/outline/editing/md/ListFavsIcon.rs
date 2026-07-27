use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ListFavsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ListFavsIcon(props: ListFavsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17 10H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 23H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8.25 5L9.56278 7.63341L12.5 8.056L10.375 10.1059L10.8765 13L8.25 11.6334L5.62256 13L6.125 10.1059L4 8.056L6.93628 7.63341L8.25 5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8.25 18L9.56278 20.6334L12.5 21.056L10.375 23.1059L10.8765 26L8.25 24.6334L5.62256 26L6.125 23.1059L4 21.056L6.93628 20.6334L8.25 18Z",
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
