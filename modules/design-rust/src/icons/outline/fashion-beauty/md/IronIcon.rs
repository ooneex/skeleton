use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct IronIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn IronIcon(props: IronIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18.9898 5H9.51505C8.11636 5 6.90326 5.96656 6.59084 7.32991L3 23H29L27.9617 18.9406C27.056 15.3999 23.8659 12.9231 20.2112 12.9231H5.71462",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 27H29",
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
