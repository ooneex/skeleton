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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19.5 27H5C3.34315 27 2 25.6569 2 24V7C2 5.34315 3.34315 4 5 4H13.2L17.4 8H27C28.6569 8 30 9.34315 30 11V12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M26 27V28.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M26 14.5V16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M28.5 16H24.75C23.2312 16 22 17.2312 22 18.75V18.75C22 20.2688 23.2312 21.5 24.75 21.5H27.25C28.7688 21.5 30 22.7312 30 24.25V24.25C30 25.7688 28.7688 27 27.25 27H23.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
