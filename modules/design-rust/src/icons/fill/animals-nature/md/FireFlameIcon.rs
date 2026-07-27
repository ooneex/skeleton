use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FireFlameIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FireFlameIcon(props: FireFlameIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m16.665.894l-.666-.593-.665.594c-.463.413-11.334,10.208-11.334,18.105,0,7.511,6.102,12,12,12s12-4.489,12-12C28,11.08,17.128,1.306,16.665.894Zm-5.165,23.704c0-3.006,1.682-5.06,4.5-8.222,2.818,3.162,4.5,5.216,4.5,8.222,0,4.213-4.455,4.402-4.5,4.402s-4.5-.189-4.5-4.402Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
