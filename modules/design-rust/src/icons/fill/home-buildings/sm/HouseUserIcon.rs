use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HouseUserIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HouseUserIcon(props: HouseUserIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "22.367 11.774 12 3.292 1.633 11.774 .367 10.226 12 .708 23.633 10.226 22.367 11.774",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m12,5.876l-8,6.546v7.578c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3v-7.578l-8-6.546Zm0,4.124c1.379,0,2.5,1.121,2.5,2.5s-1.121,2.5-2.5,2.5-2.5-1.121-2.5-2.5,1.121-2.5,2.5-2.5Zm5,11H7c-.219,0-.41-.085-.575-.204.881-2.22,3.045-3.796,5.575-3.796s4.694,1.576,5.575,3.796c-.165.12-.356.204-.575.204Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
