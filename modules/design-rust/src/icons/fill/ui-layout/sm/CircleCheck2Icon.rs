use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleCheck2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleCheck2Icon(props: CircleCheck2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20.553,5.098l-9.486,11.383-5.481-5.481,1.414-1.414,3.933,3.933L19.15,3.658c-1.925-1.652-4.42-2.658-7.15-2.658C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11c0-2.613-.919-5.013-2.447-6.902Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
