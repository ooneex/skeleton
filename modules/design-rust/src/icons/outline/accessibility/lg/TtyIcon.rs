use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TtyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TtyIcon(props: TtyIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14.4545 14.604C17.5072 13.548 20.7278 12.998 24 13C27.2722 13 30.4928 13.55 33.5455 14.604V23H45V15.59C45 14.452 44.559 13.34 43.7305 12.602C38.2399 7.704 31.2488 4.996 24 5C16.7512 4.996 9.76009 7.704 4.26955 12.602C3.44291 13.34 3 14.452 3 15.59V23H14.4545V14.604Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M34 43H14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 36H18V38H20V36Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
            path {
                d: "M40 36H38V38H40V36Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
            path {
                d: "M10 36H8V38H10V36Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
            path {
                d: "M30 36H28V38H30V36Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
            path {
                d: "M35 29H33V31H35V29Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
            path {
                d: "M15 29H13V31H15V29Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
            path {
                d: "M25 29H23V31H25V29Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
        }
    }
}
