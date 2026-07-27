use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BullseyeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BullseyeIcon(props: BullseyeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m16,8c-4.411,0-8,3.589-8,8s3.589,8,8,8,8-3.589,8-8-3.589-8-8-8Zm0,11c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m16,1C7.729,1,1,7.729,1,16s6.729,15,15,15,15-6.729,15-15S24.271,1,16,1Zm0,25c-5.514,0-10-4.486-10-10s4.486-10,10-10,10,4.486,10,10-4.486,10-10,10Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
