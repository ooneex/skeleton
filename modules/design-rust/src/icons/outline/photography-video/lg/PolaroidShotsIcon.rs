use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PolaroidShotsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PolaroidShotsIcon(props: PolaroidShotsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 45L29 45C31.2091 45 33 43.2091 33 41L33 19C33 16.7909 31.2091 15 29 15L7 15C4.79086 15 3 16.7909 3 19L3 41C3 43.2091 4.79086 45 7 45Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 10L15 7C15 4.79086 16.7909 3 19 3L41 3C43.2091 3 45 4.79086 45 7L45 29C45 31.2091 43.2091 33 41 33L38 33",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 37L28 37L28 20L8 20L8 37Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M38 25L40 25L40 8L20 8L20 10",
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
