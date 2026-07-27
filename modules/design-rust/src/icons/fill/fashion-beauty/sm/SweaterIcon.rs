use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SweaterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SweaterIcon(props: SweaterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.96973 2.75781L9.24219 3.84668C9.55852 5.11199 10.6957 6 12 6C13.3043 6 14.4415 5.11199 14.7578 3.84668L15.0303 2.75781L15.2188 2H18C20.2091 2 22 3.79086 22 6V18C22 19.1046 21.1046 20 20 20H19V9C17.8954 9 17 9 17 9V22H7V9C7 9 6.10457 9 5 9V20H4C2.89543 20 2 19.1046 2 18V6C2 3.79086 3.79086 2 6 2H8.78125L8.96973 2.75781ZM12 12H15V10H12V12Z",
                fill: "currentColor",
            }
        }
    }
}
