use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Flask2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Flask2Icon(props: Flask2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.70724 15H19.297",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M15 1.99997V7.99997L21.1242 17.9518C21.9442 19.2843 20.9855 21 19.4209 21H4.57913C3.01449 21 2.05579 19.2843 2.87581 17.9518L9 7.99997V1.99997H15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
