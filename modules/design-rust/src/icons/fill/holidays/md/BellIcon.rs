use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BellIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BellIcon(props: BellIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m26,21v-10c0-5.514-4.486-10-10-10S6,5.486,6,11v10c0,1.654-1.346,3-3,3v2h26v-2c-1.654,0-3-1.346-3-3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m12.142,28c.447,1.72,2,3,3.858,3s3.411-1.28,3.858-3h-7.716Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
