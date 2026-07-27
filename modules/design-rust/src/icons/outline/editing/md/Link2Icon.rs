use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link2Icon(props: Link2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m18,12v-1c0-1.657,1.343-3,3-3h7c1.657,0,3,1.343,3,3v10c0,1.657-1.343,3-3,3h-7c-1.657,0-3-1.343-3-3v-1",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m14,12v-1c0-1.657-1.343-3-3-3h-7c-1.657,0-3,1.343-3,3v10c0,1.657,1.343,3,3,3h7c1.657,0,3-1.343,3-3v-1",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "10",
                y1: "16",
                x2: "22",
                y2: "16",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
