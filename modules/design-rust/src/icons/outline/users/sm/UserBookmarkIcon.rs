use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserBookmarkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserBookmarkIcon(props: UserBookmarkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 10C13.2091 10 15 8.20914 15 6C15 3.79086 13.2091 2 11 2C8.79086 2 7 3.79086 7 6C7 8.20914 8.79086 10 11 10Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11 13C6.582 13 3 16.582 3 21C5.66636 21.6668 8.33342 21.9926 11 21.9902",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M22 13H16C15.4477 13 15 13.4477 15 14V22L19 19L23 22V14C23 13.4477 22.5523 13 22 13Z",
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
