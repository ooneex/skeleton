use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FireFlameIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FireFlameIcon(props: FireFlameIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m12.665.628l-.666-.593-.666.594c-.34.304-8.334,7.506-8.334,13.371,0,5.634,4.576,9,9,9s9-3.366,9-9C21,8.119,13.005.931,12.665.628Zm-4.165,16.952c0-2.351,1.237-3.911,3.5-6.455,2.263,2.543,3.5,4.104,3.5,6.455,0,3.078-2.853,3.419-3.5,3.419s-3.5-.306-3.5-3.419Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
