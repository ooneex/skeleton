use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Star2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Star2Icon(props: Star2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "31.819 11.732 20.888 10.143 16 .241 11.112 10.143 .181 11.732 8.091 19.441 6.224 30.328 16 25.19 25.776 30.328 23.909 19.441 31.819 11.732",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
