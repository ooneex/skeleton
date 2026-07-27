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
                d: "m18,6v9.5c0,3.6-2.9,6.5-6.5,6.5h0c-3.6,0-6.5-2.9-6.5-6.5V6.5c0-2.5,2-4.5,4.5-4.5h0c2.5,0,4.5,2,4.5,4.5v8c0,1.4-1.1,2.5-2.5,2.5h0c-1.4,0-2.5-1.1-2.5-2.5v-6.5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
