use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleXmarkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleXmarkIcon(props: CircleXmarkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm4.914,14.5l-1.414,1.414-3.5-3.5-3.5,3.5-1.414-1.414,3.5-3.5-3.5-3.5,1.414-1.414,3.5,3.5,3.5-3.5,1.414,1.414-3.5,3.5,3.5,3.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
