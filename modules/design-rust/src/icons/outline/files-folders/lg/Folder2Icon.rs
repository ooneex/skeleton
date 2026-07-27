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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M45 22V36C45 38.7614 42.7614 41 40 41H7.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M40 17V15C40 12.2386 37.7614 10 35 10H24L17 5H8C5.23858 5 3 7.23858 3 10V36.5C3 38.9853 5.01472 41 7.5 41V41C9.98528 41 12 38.9853 12 36.5V22H45",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
