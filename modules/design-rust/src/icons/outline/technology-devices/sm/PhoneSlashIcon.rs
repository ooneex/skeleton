use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PhoneSlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PhoneSlashIcon(props: PhoneSlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m10.626,19.031c2.36,1.443,5.094,2.373,8.173,2.789,1.003.135,1.954-.498,2.21-1.477l.99-3.784-6.367-2.732-2.558,2.521",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m10.007,13.993c-.896-.932-1.686-1.961-2.355-3.067l2.521-2.558L7.442,2l-3.779.989c-.983.257-1.617,1.215-1.481,2.222.62,4.575,2.375,8.388,5.262,11.344h0",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "22",
                y1: "2",
                x2: "2",
                y2: "22",
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
