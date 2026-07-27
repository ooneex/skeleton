use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PhoneIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PhoneIcon(props: PhoneIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m7.445,16.556c2.957,2.887,6.769,4.643,11.344,5.262,1.007.136,1.965-.497,2.222-1.481l.989-3.779-6.367-2.732-2.558,2.521c-1.106-.669-2.135-1.459-3.067-2.355-.896-.932-1.686-1.961-2.355-3.067l2.521-2.558L7.442,2l-3.779.989c-.983.257-1.617,1.215-1.481,2.222.62,4.575,2.375,8.388,5.262,11.344h0Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
