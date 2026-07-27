use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NewspaperIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NewspaperIcon(props: NewspaperIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m4,2v16.893c0,.537-.362,1.017-.824,1.093-.3.047-.596-.03-.823-.224-.224-.19-.353-.468-.353-.762v-6H0v6c0,.881.385,1.714,1.057,2.286.545.463,1.233.713,1.943.714h16c1.654,0,3-1.345,3-3V2H4Zm14,16h-10v-2h10v2Zm0-4h-10v-2h10v2Zm0-4h-10v-4h10v4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
