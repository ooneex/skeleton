use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Paperclip2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Paperclip2Icon(props: Paperclip2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m21.687,11.687l-8.3,8.3c-2.5,2.5-6.7,2.5-9.2,0h0c-2.5-2.5-2.5-6.7,0-9.2l7.43-7.43c1.8-1.8,4.6-1.8,6.4,0h0c1.8,1.8,1.8,4.6,0,6.4l-6.83,6.73c-1,1-2.6,1-3.5,0h0c-1-1-1-2.6,0-3.5l5.5-5.5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
