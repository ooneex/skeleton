use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ClockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ClockIcon(props: ClockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m16,1C7.729,1,1,7.729,1,16s6.729,15,15,15,15-6.729,15-15S24.271,1,16,1Zm7.232,21.395l-8.232-5.88V6h2v9.485l7.395,5.282-1.163,1.627Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
