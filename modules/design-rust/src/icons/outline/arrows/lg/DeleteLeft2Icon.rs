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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18.4444 41L38 41C40.7614 41 43 38.7614 43 36L43 12C43 9.23858 40.7614 7 38 7L18.4444 7L4 24L18.4444 41Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
