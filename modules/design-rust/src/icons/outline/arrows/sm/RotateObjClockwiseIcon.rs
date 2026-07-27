use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RotateObjClockwiseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RotateObjClockwiseIcon(props: RotateObjClockwiseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 8H8C7.44772 8 7 8.44772 7 9V20C7 20.5523 7.44772 21 8 21H19C19.5523 21 20 20.5523 20 20V9C20 8.44772 19.5523 8 19 8Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 1.5L10.5 4C10.1267 4 9.14011 4 8.00044 4C5.23901 4 3 6.23858 3 9V11",
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
