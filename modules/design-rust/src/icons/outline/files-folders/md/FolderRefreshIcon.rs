use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderRefreshIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderRefreshIcon(props: FolderRefreshIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 27H5C3.34315 27 2 25.6569 2 24V7C2 5.34315 3.34315 4 5 4H13.2L17.4 8H27C28.6569 8 30 9.34315 30 11V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M30 17V21H26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M26.3178 27C25.3675 27.6318 24.2267 28 23 28C19.6863 28 17 25.3137 17 22C17 18.6863 19.6863 16 23 16C25.7 16 27.9835 17.7835 28.7367 20.2366L29 21L28.9399 20.8256",
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
