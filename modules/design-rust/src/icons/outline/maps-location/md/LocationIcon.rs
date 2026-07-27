use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LocationIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LocationIcon(props: LocationIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.6602 20H27.5L30 29H2L4.5 20H6.33891",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7 10.5334C7 17.8889 16 24 16 24C16 24 25 17.8889 25 10.5334C25 5.09299 20.3871 2 16 2C11.6129 2 7 5.09299 7 10.5334Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 14C17.6569 14 19 12.6569 19 11C19 9.34315 17.6569 8 16 8C14.3431 8 13 9.34315 13 11C13 12.6569 14.3431 14 16 14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
