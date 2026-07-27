use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PageIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PageIcon(props: PageIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m18,1H6c-1.654,0-3,1.346-3,3v16c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V4c0-1.654-1.346-3-3-3Zm-1,18H7v-2h10v2Zm0-4H7v-2h10v2Zm0-4H7v-6h10v6Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
