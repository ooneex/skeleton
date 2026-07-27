use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PenIcon(props: PenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m28.964,3.036c-2.044-2.044-5.37-2.044-7.414,0L3.597,20.989l-2.472,9.886,9.886-2.472L28.964,10.45c2.044-2.044,2.044-5.37,0-7.414Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
