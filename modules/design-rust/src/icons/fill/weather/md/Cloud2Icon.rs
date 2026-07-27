use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Cloud2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Cloud2Icon(props: Cloud2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m26.996,14.178c-.171-6.193-5.262-11.178-11.496-11.178-6.022,0-11.03,4.725-11.463,10.664-2.44,1.141-4.037,3.607-4.037,6.336,0,3.86,3.14,7,7,7h18.5c3.584,0,6.5-2.916,6.5-6.5,0-3.024-2.133-5.638-5.004-6.322Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
