use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShopIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShopIcon(props: ShopIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polyline {
                points: "13 29 13 21 19 21 19 29",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            path {
                d: "m27,19v7c0,1.657-1.343,3-3,3H8c-1.657,0-3-1.343-3-3v-7",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m30.5,11l-5.5-8H7L1.5,11c0,2.209,1.791,4,4,4,1.518,0,2.822-.855,3.5-2.101.678,1.246,1.982,2.101,3.5,2.101s2.822-.855,3.5-2.101c.678,1.246,1.982,2.101,3.5,2.101s2.822-.855,3.5-2.101c.678,1.246,1.982,2.101,3.5,2.101,2.209,0,4-1.791,4-4Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
