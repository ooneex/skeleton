use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BookOpenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BookOpenIcon(props: BookOpenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "16",
                y1: "6",
                x2: "16",
                y2: "28",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "m16,28c4.667-2.667,9.333-2.667,14,0h0V6c-4.667-2.667-9.333-2.667-14,0-4.667-2.667-9.333-2.667-14,0v22h0c4.667-2.667,9.333-2.667,14,0Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
