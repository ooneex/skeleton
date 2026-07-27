use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BookBookmarkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BookBookmarkIcon(props: BookBookmarkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 2V9L12 7.5L9 9V2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M19 17L18.8922 17.5388C18.6333 18.8335 18.6333 20.1665 18.8922 21.4612L19 22",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4 19.5L4 4C4 2.89543 4.89543 2 6 2L20 2L20 17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M20 22H6.5C5.11929 22 4 20.8807 4 19.5V19.5C4 18.1193 5.11929 17 6.5 17H20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
