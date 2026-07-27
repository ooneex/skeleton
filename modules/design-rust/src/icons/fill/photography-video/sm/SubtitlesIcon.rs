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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 6C23 4.34315 21.6569 3 20 3H4C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34314 21 4 21H20C21.6569 21 23 19.6569 23 18V6ZM5 15H13V17H5V15ZM11 11V13H19V11H11ZM15 15H19V17H15V15ZM5 11V13H9V11H5Z",
                fill: "currentColor",
            }
        }
    }
}
