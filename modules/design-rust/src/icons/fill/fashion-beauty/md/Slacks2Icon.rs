use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Slacks2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Slacks2Icon(props: Slacks2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26 12H24C22.3431 12 21 10.6569 21 9V8H19V9C19 11.7614 21.2386 14 24 14H26V31H19.5L17 14H15L12.5 31H6V14H8C10.7614 14 13 11.7614 13 9V8H11V9C11 10.6569 9.65685 12 8 12H6V6H26V12Z",
                fill: "currentColor",
            }
            path {
                d: "M12 4H6V1H12V4Z",
                fill: "currentColor",
            }
            path {
                d: "M18 4H14V1H18V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M26 4H20V1H26V4Z",
                fill: "currentColor",
            }
        }
    }
}
