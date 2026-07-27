use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Gauge2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Gauge2Icon(props: Gauge2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm0,13c-1.103,0-2-.897-2-2,0-.178.031-.347.075-.511l-4.739-4.739,1.414-1.414,4.739,4.739c.164-.044.334-.075.511-.075,1.103,0,2,.897,2,2s-.897,2-2,2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
