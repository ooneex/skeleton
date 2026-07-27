use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LayoutRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LayoutRightIcon(props: LayoutRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m27,3H5c-2.206,0-4,1.794-4,4v18c0,2.206,1.794,4,4,4h22c2.206,0,4-1.794,4-4V7c0-2.206-1.794-4-4-4Zm-1,21h-2V8h2v16Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
