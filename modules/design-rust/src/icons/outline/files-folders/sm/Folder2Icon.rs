use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Folder2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Folder2Icon(props: Folder2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 11V18C22 19.1046 21.1046 20 20 20H4",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M20 7V7C20 5.89543 19.1046 5 18 5H11.9L9.2 3H4C2.89543 3 2 3.89543 2 5V18C2 19.1046 2.89543 20 4 20V20C5.10457 20 6 19.1046 6 18V11H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
