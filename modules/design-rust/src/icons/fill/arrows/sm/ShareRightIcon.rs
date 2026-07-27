use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareRightIcon(props: ShareRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m18,.586l-1.414,1.414,3,3h-.586c-6.065,0-11,4.935-11,11h2c0-4.962,4.038-9,9-9h.586l-3,3,1.414,1.414,5.414-5.414L18,.586Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m16,22H5c-1.654,0-3-1.346-3-3v-11c0-1.654,1.346-3,3-3h5v2h-5c-.551,0-1,.449-1,1v11c0,.551.449,1,1,1h11c.551,0,1-.449,1-1v-6h2v6c0,1.654-1.346,3-3,3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
