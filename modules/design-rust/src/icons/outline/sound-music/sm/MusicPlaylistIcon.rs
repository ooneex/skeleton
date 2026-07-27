use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MusicPlaylistIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MusicPlaylistIcon(props: MusicPlaylistIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 21C14.2091 21 16 19.433 16 17.5C16 15.567 14.2091 14 12 14C9.79086 14 8 15.567 8 17.5C8 19.433 9.79086 21 12 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 16.5714V17.5V4L16.6412 4.47635C17.8483 5.37299 19.3119 5.85714 20.8155 5.85714H21V10H20.1317C19.0583 10 17.9992 9.75313 17.0365 9.27847L16.2392 8.88544",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 8L11 8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4 4L7 4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
