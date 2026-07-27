use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextColor2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextColor2Icon(props: TextColor2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.1036 42H10L23.5 5H24H24.5L33.2568 29H15.08",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M38 31.5C40.7273 34.3 43 37.2 43 40C43 43 40.7613 45 38 45C35.2388 45 33 43 33 40C33 37.2 35.2727 34.3 38 31.5Z",
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
