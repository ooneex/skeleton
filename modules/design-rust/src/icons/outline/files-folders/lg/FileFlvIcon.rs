use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileFlvIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileFlvIcon(props: FileFlvIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 3V16H7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M7 24C7 21.7277 7 18.7293 7 16.2422C7 15.4466 7.31607 14.6839 7.87868 14.1213L18.1213 3.87868C18.6839 3.31607 19.447 3 20.2426 3H36C38.7614 3 41 5.23768 41 7.9991C41 13.0203 41 18.769 41 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M40.8523 29H41L36.2857 43H34.7143L30 29H30.1607",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7 43L7 29H15M12 36H7.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 29L20 43H28",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
