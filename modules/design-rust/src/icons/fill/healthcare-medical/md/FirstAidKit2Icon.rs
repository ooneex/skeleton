use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FirstAidKit2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FirstAidKit2Icon(props: FirstAidKit2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 3H11V8H9V1H23V8H21V3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 6C29.2091 6 31 7.79086 31 10V26C31 28.2091 29.2091 30 27 30H5C2.79086 30 1 28.2091 1 26V10C1 7.79086 2.79086 6 5 6H27ZM14 11V16H9V20H14V25H18V20H23V16H18V11H14Z",
                fill: "currentColor",
            }
        }
    }
}
