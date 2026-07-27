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
                d: "m10.5,27.5l-8,2,2-8L22.257,3.743c1.657-1.657,4.343-1.657,6,0h0c1.657,1.657,1.657,4.343,0,6L10.5,27.5Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
