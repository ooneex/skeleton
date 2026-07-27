use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pen2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pen2Icon(props: Pen2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m28.964,3.036c-2.044-2.044-5.37-2.044-7.414,0L3.597,20.989l-2.472,9.886,9.886-2.472L28.964,10.45c2.044-2.044,2.044-5.37,0-7.414Zm-1.414,6l-1.519,1.519-4.586-4.586,1.519-1.519c1.265-1.264,3.321-1.264,4.586,0,1.264,1.264,1.264,3.322,0,4.586Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
