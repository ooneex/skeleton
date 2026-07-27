use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserMinus2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserMinus2Icon(props: UserMinus2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M45 20L33 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 24C11.0595 24 3 31.5622 3 40.8894C14.9993 43.7035 27.0007 43.7035 39 40.8894C39 31.5622 30.9405 24 21 24Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 19C25.1421 19 28.5 15.6421 28.5 11.5C28.5 7.35786 25.1421 4 21 4C16.8579 4 13.5 7.35786 13.5 11.5C13.5 15.6421 16.8579 19 21 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
