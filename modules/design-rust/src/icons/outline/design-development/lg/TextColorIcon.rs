use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextColorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextColorIcon(props: TextColorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M40.5 32H7.5C6.11929 32 5 33.1193 5 34.5V40.5C5 41.8807 6.11929 43 7.5 43H40.5C41.8807 43 43 41.8807 43 40.5V34.5C43 33.1193 41.8807 32 40.5 32Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17.5 20H30.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M15.1166 27H15L23.4375 5H24H24.5625L33 27H32.8878",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
