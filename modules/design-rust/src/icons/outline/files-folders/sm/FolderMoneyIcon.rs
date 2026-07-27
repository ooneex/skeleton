use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderMoneyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderMoneyIcon(props: FolderMoneyIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 20H4C2.89543 20 2 19.1046 2 18V5C2 3.89543 2.89543 3 4 3H10L13 6H20C21.1046 6 22 6.89543 22 8V8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19 21V22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 12V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 13L18 13C16.8954 13 16 13.8954 16 15V15C16 16.1046 16.8954 17 18 17H20C21.1046 17 22 17.8954 22 19V19C22 20.1046 21.1046 21 20 21H17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
