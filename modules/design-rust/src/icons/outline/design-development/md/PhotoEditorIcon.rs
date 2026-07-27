use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PhotoEditorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PhotoEditorIcon(props: PhotoEditorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 19C11.0294 19 7 14.9706 7 10C7 5.02944 11.0294 1 16 1C20.9706 1 25 5.02944 25 10C25 14.9706 20.9706 19 16 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22 29C17.0294 29 13 24.9706 13 20C13 15.0294 17.0294 11 22 11C26.9706 11 31 15.0294 31 20C31 24.9706 26.9706 29 22 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 29C5.02944 29 1 24.9706 1 20C1 15.0294 5.02944 11 10 11C14.9706 11 19 15.0294 19 20C19 24.9706 14.9706 29 10 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
