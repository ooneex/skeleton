use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BagSearchIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BagSearchIcon(props: BagSearchIconProps) -> Element {
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
                d: "M19 10V6H12H5.00001V12L3.47846 19.6078C3.23094 20.8454 4.17753 22 5.43962 22H9.99997",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16.5 21C18.433 21 20 19.433 20 17.5C20 15.567 18.433 14 16.5 14C14.567 14 13 15.567 13 17.5C13 19.433 14.567 21 16.5 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21.5 22.5L18.975 19.975",
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
