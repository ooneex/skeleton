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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m22,18c-1.657,0-3-1.343-3-3v-6c0-3.866-3.134-7-7-7h0c-3.866,0-7,3.134-7,7v6c0,1.657-1.343,3-3,3h20Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m10.277,22c.346.595.984,1,1.723,1s1.376-.405,1.723-1h-3.445Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
