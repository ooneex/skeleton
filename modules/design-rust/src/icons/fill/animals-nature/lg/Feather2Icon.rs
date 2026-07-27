use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Feather2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Feather2Icon(props: Feather2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23 39.0015H14.7735L29.5 21.5L29.1213 21L4.49998 45.6213L2.37866 43.5L9 36.8786V25.0015L27.928 5.9295C31.834 2.0235 38.164 2.0235 42.07 5.9295C45.976 9.8355 45.976 16.1655 42.07 20.0715L23 39.0015Z",
                fill: "currentColor",
            }
        }
    }
}
