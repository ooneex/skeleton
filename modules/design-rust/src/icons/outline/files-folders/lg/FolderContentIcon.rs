use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderContentIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderContentIcon(props: FolderContentIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 17V39C5 41.2091 6.79086 43 9 43H39C41.2091 43 43 41.2091 43 39V23C43 20.7909 41.2091 19 39 19H26.7143L19.4762 13H9C6.79086 13 5 14.7909 5 17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M41 14V5H7V8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
