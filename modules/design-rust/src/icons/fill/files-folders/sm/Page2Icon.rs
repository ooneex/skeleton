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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m18,1H6c-1.654,0-3,1.346-3,3v16c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V4c0-1.654-1.346-3-3-3ZM7,5h5v5h-5v-5Zm10,13H7v-2h10v2Zm0-4H7v-2h10v2Zm0-4h-3v-2h3v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
