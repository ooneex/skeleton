use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WindowIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WindowIcon(props: WindowIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m27,3H5c-2.206,0-4,1.794-4,4v18c0,2.206,1.794,4,4,4h22c2.206,0,4-1.794,4-4V7c0-2.206-1.794-4-4-4Zm-15.5,4c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm-5,0c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm22.5,18c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-11h26v11Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
