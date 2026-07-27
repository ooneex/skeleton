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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8.7 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H8.7L2 12L8.7 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
