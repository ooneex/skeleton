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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20,2H4c-1.654,0-3,1.346-3,3v11c0,1.654,1.346,3,3,3h4.5l3.5,4.667,3.5-4.667h4.5c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Zm-6,12H6v-2h8v2Zm4-5H6v-2h12v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
