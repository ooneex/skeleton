use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DeleteLeft2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DeleteLeft2Icon(props: DeleteLeft2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 28L26 28C27.6569 28 29 26.6569 29 25L29 7C29 5.34314 27.6569 4 26 4L12 4L2 16L12 28Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
