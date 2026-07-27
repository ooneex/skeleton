use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SubtitlesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SubtitlesIcon(props: SubtitlesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 28C29.2091 28 31 26.2091 31 24L31 8C31 5.79086 29.2091 4 27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28L27 28ZM7 21H18V23H7V21ZM20 21V23H25V21H20ZM25 16H14V18H25V16ZM7 16V18H12V16H7Z",
                fill: "currentColor",
            }
        }
    }
}
