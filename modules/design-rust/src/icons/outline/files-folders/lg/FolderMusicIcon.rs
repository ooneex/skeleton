use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderMusicIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderMusicIcon(props: FolderMusicIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23 41H8C5.23858 41 3 38.7614 3 36V10C3 7.23858 5.23858 5 8 5H19L27 11H40C42.7614 11 45 13.2386 45 16V19.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M35 39V39.5V27.5L46 24.5V36.5V36",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M31.5 43C33.433 43 35 41.433 35 39.5C35 37.567 33.433 36 31.5 36C29.567 36 28 37.567 28 39.5C28 41.433 29.567 43 31.5 43Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M42.5 40C44.433 40 46 38.433 46 36.5C46 34.567 44.433 33 42.5 33C40.567 33 39 34.567 39 36.5C39 38.433 40.567 40 42.5 40Z",
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
