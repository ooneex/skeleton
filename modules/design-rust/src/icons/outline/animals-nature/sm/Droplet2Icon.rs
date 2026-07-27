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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 14.2423C4 8.92408 12 2 12 2C12 2 20 8.90927 20 14.2423C20 19.1882 15.8996 22 12 22C8.10036 22 4 19.1882 4 14.2423Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
