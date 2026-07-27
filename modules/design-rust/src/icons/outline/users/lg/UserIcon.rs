use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserIcon(props: UserIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 24C14.0595 24 6 31.5622 6 40.8894C17.9993 43.7035 30.0007 43.7035 42 40.8894C42 31.5622 33.9405 24 24 24Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 19C28.1421 19 31.5 15.6421 31.5 11.5C31.5 7.35786 28.1421 4 24 4C19.8579 4 16.5 7.35786 16.5 11.5C16.5 15.6421 19.8579 19 24 19Z",
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
