use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Computer2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Computer2Icon(props: Computer2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 20H8V16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8 16L4 16C2.89543 16 2 15.1046 2 14L2 6C2 4.89543 2.89543 4 4 4L8 4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20 4L14 4C12.8954 4 12 4.89543 12 6L12 18C12 19.1046 12.8954 20 14 20L20 20C21.1046 20 22 19.1046 22 18L22 6C22 4.89543 21.1046 4 20 4Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 17C17.6904 17 18.25 16.4404 18.25 15.75C18.25 15.0596 17.6904 14.5 17 14.5C16.3096 14.5 15.75 15.0596 15.75 15.75C15.75 16.4404 16.3096 17 17 17Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M16 8H18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
