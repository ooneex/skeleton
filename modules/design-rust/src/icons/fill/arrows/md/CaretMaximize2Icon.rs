use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretMaximize2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretMaximize2Icon(props: CaretMaximize2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 26C30 28.2091 28.2091 30 26 30L6 30C3.79086 30 2 28.2091 2 26V6C2 3.79086 3.79086 2 6 2H26C28.2091 2 30 3.79086 30 6L30 26ZM13.9143 6.00006H5.99996L6.00012 13.9142L13.9143 6.00006ZM26 6.00006H18.0857L25.9999 13.9142L26 6.00006ZM13.9143 26H5.99996L6.00012 18.0859L13.9143 26ZM26 26H18.0857L25.9999 18.0859L26 26Z",
                fill: "currentColor",
            }
        }
    }
}
