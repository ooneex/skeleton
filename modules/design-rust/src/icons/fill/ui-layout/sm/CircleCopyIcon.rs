use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleCopyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleCopyIcon(props: CircleCopyIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "15",
                cy: "15",
                r: "8",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m4.053,15.366l-.707-.707c-1.513-1.512-2.346-3.522-2.346-5.659C1,4.589,4.589,1,9,1c2.139,0,4.148.833,5.66,2.347l.706.708-1.415,1.413-.707-.708c-1.133-1.135-2.64-1.76-4.244-1.76-3.309,0-6,2.691-6,6,0,1.603.625,3.11,1.76,4.245l.707.707-1.414,1.415Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
