use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberZeroIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberZeroIcon(props: NumberZeroIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 21V11C24 6.58172 20.4183 3 16 3C11.5817 3 8 6.58172 8 11V21C8 25.4183 11.5817 29 16 29C20.4183 29 24 25.4183 24 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
