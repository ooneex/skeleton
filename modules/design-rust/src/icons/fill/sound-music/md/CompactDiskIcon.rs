use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CompactDiskIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CompactDiskIcon(props: CompactDiskIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m16,1C7.729,1,1,7.729,1,16s6.729,15,15,15,15-6.729,15-15S24.271,1,16,1Zm0,21c-3.314,0-6-2.686-6-6s2.686-6,6-6,6,2.686,6,6-2.686,6-6,6Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
