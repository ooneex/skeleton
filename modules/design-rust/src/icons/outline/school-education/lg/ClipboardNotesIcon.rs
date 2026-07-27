use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ClipboardNotesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ClipboardNotesIcon(props: ClipboardNotesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 5H12C9.23858 5 7 7.23858 7 10V40C7 42.7614 9.23858 45 12 45H36C38.7614 45 41 42.7614 41 40V36.5M32 5H36C38.7614 5 41 7.23858 41 10V13.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 8V4.5C16 3.11929 17.1193 2 18.5 2H29.5C30.8807 2 32 3.11929 32 4.5V8H16Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M36.6098 26.4365L30.8699 32.1454",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M36.5 33.1304C40.7213 32.1526 43.8987 26.9639 45 18C32.3481 19.5553 27.2289 25.248 30.8436 32.1717L28 35L15 35",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15 17H31",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15 26H24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
