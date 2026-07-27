use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderDownloadIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderDownloadIcon(props: FolderDownloadIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M45 22.5V16C45 13.2386 42.7614 11 40 11H27L19 5H8C5.23858 5 3 7.23858 3 10V36C3 38.7614 5.23858 41 8 41H25",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M37 25C41.9706 25 46 29.0294 46 34C46 38.9706 41.9706 43 37 43C32.0294 43 28 38.9706 28 34C28 29.0294 32.0294 25 37 25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M37 30L37 38V37.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M33 34L37 38L41 34",
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
