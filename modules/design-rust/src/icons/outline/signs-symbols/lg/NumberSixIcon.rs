use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberSixIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberSixIcon(props: NumberSixIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 5H26C18.268 5 12 11.268 12 19L12 31V30.5314",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M36 31V29C36 22.3726 30.6274 17 24 17C17.3726 17 12 22.3726 12 29V31C12 37.6274 17.3726 43 24 43C30.6274 43 36 37.6274 36 31Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
