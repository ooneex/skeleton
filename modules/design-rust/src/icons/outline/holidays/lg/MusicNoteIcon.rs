use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MusicNoteIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MusicNoteIcon(props: MusicNoteIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27 33.9365V36V6L29.2211 7.48076C31.6851 9.12343 34.5803 10 37.5416 10H39V19H35.9102C33.988 19 32.0837 18.6305 30.3009 17.9117L27.2297 16.6733",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19 43C23.4183 43 27 39.866 27 36C27 32.134 23.4183 29 19 29C14.5817 29 11 32.134 11 36C11 39.866 14.5817 43 19 43Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
