use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AtSign2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AtSign2Icon(props: AtSign2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "12",
                cy: "12",
                r: "4",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "M16,21.168A10,10,0,1,1,22,12v1a3,3,0,0,1-6,0V8",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
