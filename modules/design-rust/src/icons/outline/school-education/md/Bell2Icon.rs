use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Bell2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Bell2Icon(props: Bell2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13.7639 20C13.2889 20.5308 13 21.2316 13 22C13 23.6569 14.3431 25 16 25C17.6569 25 19 23.6569 19 22C19 21.2316 18.7111 20.5308 18.2361 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5 21.7348V13.4286C5 7.11675 9.92487 2 16 2C22.0751 2 27 7.11675 27 13.4286V21.7348",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M9 13.218C9 9.23163 12.134 6 16 6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 29C23.732 29 30 26.9853 30 24.5C30 22.0147 23.732 20 16 20C8.26801 20 2 22.0147 2 24.5C2 26.9853 8.26801 29 16 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
