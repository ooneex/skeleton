use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Infinity2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Infinity2Icon(props: Infinity2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.4703 14.5C16.7551 15.3082 18.0851 16 19 16C21.2 16 23 14.2 23 12C23 9.8 21.2 8 19 8C16 8 8 16 5 16C2.8 16 1 14.2 1 12C1 9.8 2.8 8 5 8C6.62796 8 8.12332 9.23573 9.5 10L9.35867 9.92019",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6 11L9.5 10L8.46472 6.1363",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
