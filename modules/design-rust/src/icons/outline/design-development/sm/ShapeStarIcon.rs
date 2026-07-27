use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShapeStarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShapeStarIcon(props: ShapeStarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 2.5L14.9355 8.4252L21.5 9.37555L16.75 13.9874L17.871 20.5L12 17.4252L6.129 20.5L7.25 13.9874L2.5 9.37555L9.0645 8.4252L12 2.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
