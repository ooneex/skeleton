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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 2.01141L14.2376 3.6736C15.2721 4.44215 16.5267 4.85714 17.8155 4.85714H19V9H17.1525C16.067 9 14.9946 8.77913 14 8.35268V17.5H12V2.01141Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 17.5C5 15.1831 7.13136 13.5 9.5 13.5C11.8686 13.5 14 15.1831 14 17.5C14 19.8169 11.8686 21.5 9.5 21.5C7.13136 21.5 5 19.8169 5 17.5Z",
                fill: "currentColor",
            }
        }
    }
}
