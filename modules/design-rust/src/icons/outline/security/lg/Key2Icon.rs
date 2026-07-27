use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Key2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Key2Icon(props: Key2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M42 6L22 26L22.2039 25.7961",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15 43C20.5228 43 25 38.5228 25 33C25 27.4772 20.5228 23 15 23C9.47715 23 5 27.4772 5 33C5 38.5228 9.47715 43 15 43Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M40.7625 18.5304L38.6412 16.409M40.7625 18.5304L44.6465 14.6465L39 9L38.2929 9.70711M40.7625 18.5304L36.8683 22.4246L31.2218 16.7782L31.9289 16.0711",
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
