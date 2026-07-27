use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Message2ContentIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Message2ContentIcon(props: Message2ContentIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m27,3H5c-2.206,0-4,1.794-4,4v14c0,2.206,1.794,4,4,4h5.532l5.468,6.562,5.468-6.562h5.532c2.206,0,4-1.794,4-4V7c0-2.206-1.794-4-4-4Zm-9,15H7v-2h11v2Zm7-6H7v-2h18v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
