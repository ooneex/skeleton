use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Star2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Star2Icon(props: Star2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24.0001 5L29.871 16.8482L43.0001 18.7492L33.5001 27.9735L35.742 41L24.0001 34.8523L12.2581 41L14.5001 27.9735L5.00006 18.7492L18.1291 16.8482L24.0001 5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
