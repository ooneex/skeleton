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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9,20l-7,2,2-7L16.414,2.586c.781-.781,2.047-.781,2.828,0l2.172,2.172c.781,.781,.781,2.047,0,2.828l-12.414,12.414Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
