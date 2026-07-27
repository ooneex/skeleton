use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Page2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Page2Icon(props: Page2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m25,1H7c-2.206,0-4,1.794-4,4v22c0,2.206,1.794,4,4,4h18c2.206,0,4-1.794,4-4V5c0-2.206-1.794-4-4-4ZM8,6h8v8h-8V6Zm16,18H8v-2h16v2Zm0-5H8v-2h16v2Zm0-5h-5v-2h5v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
