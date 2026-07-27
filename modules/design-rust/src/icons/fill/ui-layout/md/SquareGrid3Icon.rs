use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareGrid3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareGrid3Icon(props: SquareGrid3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m26,2H6c-2.206,0-4,1.794-4,4v20c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4V6c0-2.206-1.794-4-4-4Zm-14.5,23.5h-5v-5h5v5Zm0-7h-5v-5h5v5Zm0-7h-5v-5h5v5Zm7,14h-5v-5h5v5Zm0-7h-5v-5h5v5Zm0-7h-5v-5h5v5Zm7,14h-5v-5h5v5Zm0-7h-5v-5h5v5Zm0-7h-5v-5h5v5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
