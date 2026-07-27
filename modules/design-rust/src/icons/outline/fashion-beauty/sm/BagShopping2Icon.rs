use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BagShopping2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BagShopping2Icon(props: BagShopping2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 9V4C9 2.34315 10.3431 1 12 1V1C13.6569 1 15 2.34315 15 4V9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5.00001 12L3.47843 19.6078C3.2309 20.8453 4.17749 22 5.43958 22H18.5604C19.8225 22 20.7691 20.8453 20.5216 19.6078L19 12V6H12H5.00001V12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
