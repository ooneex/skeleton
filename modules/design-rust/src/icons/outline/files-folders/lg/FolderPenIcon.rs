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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 41H8C5.23858 41 3 38.7614 3 36V10C3 7.23858 5.23858 5 8 5H19L27 11H40C42.7614 11 45 13.2386 45 16V20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M32.6139 42.5233L44.4315 30.7056C45.85 29.287 45.85 26.9871 44.4315 25.5685C43.0129 24.15 40.713 24.15 39.2944 25.5685L27.4768 37.3861L27 43L32.6139 42.5233Z",
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
