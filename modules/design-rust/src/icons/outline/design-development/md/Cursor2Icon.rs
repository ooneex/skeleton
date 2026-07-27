use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Cursor2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Cursor2Icon(props: Cursor2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5.49995 5.50001L22 9.49993L17.6641 13.893L25.1142 21.3432C26.1556 22.3846 26.1556 24.073 25.1142 25.1144V25.1144C24.0728 26.1558 22.3844 26.1558 21.343 25.1144L13.8929 17.6642L9.4999 22L5.49995 5.50001Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
