use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareLeft3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareLeft3Icon(props: ShareLeft3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 4L2 12L11 20V15H14C17.866 15 21 18.134 21 22V18C21 13.0294 16.9706 9 12 9H11V4Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
