use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DiscountCodeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DiscountCodeIcon(props: DiscountCodeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M0.999999 20L23 20L23 15.5L22.9592 15.4932C21.2516 15.2086 20 13.7312 20 12C20 10.2688 21.2516 8.79141 22.9592 8.5068L23 8.5L23 4L1 4L1 8.5L1.04082 8.5068C2.74843 8.79141 4 10.2688 4 12C4 13.7312 2.74843 15.2086 1.04082 15.4932L0.999999 15.5L0.999999 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 15L15 9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                "data-color": "color-2",
            }
            path {
                d: "M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                "data-color": "color-2",
            }
        }
    }
}
