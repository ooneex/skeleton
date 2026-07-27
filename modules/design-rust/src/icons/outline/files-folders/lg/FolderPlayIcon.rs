use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderPlayIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderPlayIcon(props: FolderPlayIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25 41H8C5.23858 41 3 38.7614 3 36V10C3 7.23858 5.23858 5 8 5H19L27 11H40C42.7614 11 45 13.2386 45 16V29.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M30 26.75L44 35L30 43.25V26.75Z",
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
