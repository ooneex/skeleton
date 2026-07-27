use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EnvelopeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EnvelopeIcon(props: EnvelopeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m16,14.882l15-7.5v-.382c0-2.206-1.794-4-4-4H5c-2.206,0-4,1.794-4,4v.382l15,7.5Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m16,17.118L1,9.618v15.382c0,2.206,1.794,4,4,4h22c2.206,0,4-1.794,4-4v-15.382l-15,7.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
