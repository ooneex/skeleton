use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Computer2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Computer2Icon(props: Computer2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 17H45",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 41H19V34",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 34L7 34C4.79086 34 3 32.2091 3 30L3 11C3 8.79086 4.79086 7 7 7L19 7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M41 7L28 7C25.7909 7 24 8.79086 24 11L24 37C24 39.2091 25.7909 41 28 41L41 41C43.2091 41 45 39.2091 45 37L45 11C45 8.79086 43.2091 7 41 7Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M34.5 36C35.8807 36 37 34.8807 37 33.5C37 32.1193 35.8807 31 34.5 31C33.1193 31 32 32.1193 32 33.5C32 34.8807 33.1193 36 34.5 36Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M39 12H40",
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
