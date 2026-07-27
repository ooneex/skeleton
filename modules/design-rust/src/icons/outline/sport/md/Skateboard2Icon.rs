use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Skateboard2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Skateboard2Icon(props: Skateboard2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.5 22C8.88071 22 10 20.8807 10 19.5C10 18.1193 8.88071 17 7.5 17C6.11929 17 5 18.1193 5 19.5C5 20.8807 6.11929 22 7.5 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24.5 22C25.8807 22 27 20.8807 27 19.5C27 18.1193 25.8807 17 24.5 17C23.1193 17 22 18.1193 22 19.5C22 20.8807 23.1193 22 24.5 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30.5 11V11C29.5557 12.259 28.0738 13 26.5 13H5.49996C3.92619 13 2.44427 12.259 1.5 11V11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
