use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PaperclipIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PaperclipIcon(props: PaperclipIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m11.5,23c-4.136,0-7.5-3.364-7.5-7.5V6.5c0-3.032,2.468-5.5,5.5-5.5s5.5,2.468,5.5,5.5v8c0,1.963-1.537,3.5-3.5,3.5s-3.5-1.537-3.5-3.5v-7.5h2v7.5c0,.841.659,1.5,1.5,1.5s1.5-.659,1.5-1.5V6.5c0-1.963-1.537-3.5-3.5-3.5s-3.5,1.537-3.5,3.5v9c0,3.032,2.468,5.5,5.5,5.5s5.5-2.468,5.5-5.5V5h2v10.5c0,4.136-3.364,7.5-7.5,7.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
