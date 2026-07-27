use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LayoutBottomIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LayoutBottomIcon(props: LayoutBottomIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20,3H4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h16c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3Zm-1,14H5v-2h14v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
