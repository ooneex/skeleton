use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FireFlameIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FireFlameIcon(props: FireFlameIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m12,22c1.067,0,4-.786,4-3.929,0-2.655-1.542-4.321-4-7.071-2.458,2.75-4,4.417-4,7.071,0,3.143,2.933,3.929,4,3.929Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m4,14C4,8.516,12,1.375,12,1.375c0,0,8,7.125,8,12.625,0,5.1-4.1,8-8,8s-8-2.9-8-8Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
