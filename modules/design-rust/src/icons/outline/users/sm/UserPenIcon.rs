use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserPenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserPenIcon(props: UserPenIconProps) -> Element {
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
                d: "M8 21.847C6.33333 21.6954 4.66667 21.4167 3 21C3 16.582 6.582 13 11 13C11.7153 13 12.407 13.0966 13.0653 13.2749",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 23L21.5 16.5C22.3284 15.6716 22.3284 14.3284 21.5 13.5C20.6716 12.6716 19.3284 12.6716 18.5 13.5L12 20V23H15Z",
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
