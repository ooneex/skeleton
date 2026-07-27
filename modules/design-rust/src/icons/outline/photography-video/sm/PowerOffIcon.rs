use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PowerOffIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PowerOffIcon(props: PowerOffIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.5 4.20398C4.80989 5.76012 3 8.66867 3 11.9999C3 16.9705 7.02944 20.9999 12 20.9999C16.9706 20.9999 21 16.9705 21 11.9999C21 8.66867 19.1901 5.76012 16.5 4.20398",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 11V2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
