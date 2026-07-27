use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderPenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderPenIcon(props: FolderPenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 20H4C2.89543 20 2 19.1046 2 18V5C2 3.89543 2.89543 3 4 3H10L13 6H20C21.1046 6 22 6.89543 22 8V8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 21.5L22 15.5C22.8284 14.6716 22.8284 13.3284 22 12.5C21.1716 11.6716 19.8284 11.6716 19 12.5L13 18.5V21.5H16Z",
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
