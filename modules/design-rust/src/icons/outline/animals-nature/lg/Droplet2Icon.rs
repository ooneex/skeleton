use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Droplet2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Droplet2Icon(props: Droplet2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 28.7089C8 17.5406 24 3 24 3C24 3 40 17.5095 40 28.7089C40 39.0952 31.7993 45 24 45C16.2007 45 8 39.0952 8 28.7089Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
