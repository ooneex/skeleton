use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquarePlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquarePlusIcon(props: SquarePlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m26,2H6c-2.206,0-4,1.794-4,4v20c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4V6c0-2.206-1.794-4-4-4Zm-3,15h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
