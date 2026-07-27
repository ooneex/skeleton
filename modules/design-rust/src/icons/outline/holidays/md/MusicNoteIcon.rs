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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18 22.6243V24V4L19.3333 5C21.0643 6.29822 23.1696 7 25.3333 7H26V13H24.2513C22.769 13 21.3052 12.6705 19.9659 12.0352L18.2303 11.212",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12.5 29C15.5376 29 18 26.7614 18 24C18 21.2386 15.5376 19 12.5 19C9.46243 19 7 21.2386 7 24C7 26.7614 9.46243 29 12.5 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
