use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CloudIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CloudIcon(props: CloudIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m15,4c-3.8,0-7,2.6-7.8,6.2-.4-.1-.8-.2-1.2-.2-2.8,0-5,2.2-5,5s2.2,5,5,5h9c4.4,0,8-3.6,8-8s-3.6-8-8-8Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
