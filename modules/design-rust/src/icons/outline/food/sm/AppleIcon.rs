use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AppleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AppleIcon(props: AppleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                "data-color": "color-2",
                "data-stroke": "none",
                d: "M15,0h0V2a3,3,0,0,1-3,3h0V3A3,3,0,0,1,15,0Z",
                fill: "currentColor",
            }
            path {
                d: "M20.033,8.013c-2.448-1.909-5.2-.534-7.533-.534S7.415,6.1,4.967,8.013c-2.245,1.752-2.99,7.064.039,11.76,2.906,4.5,5.836,2.978,7.494,2.978s4.588,1.527,7.494-2.978C23.023,15.077,22.278,9.765,20.033,8.013Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
