use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BagHeartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BagHeartIcon(props: BagHeartIconProps) -> Element {
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
                d: "M19 10V6H12H5.00001V12L3.47843 19.6078C3.2309 20.8453 4.17749 22 5.43959 22H11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18 22.5C19.109 22 23 19.229 23 16.689C23 15.204 21.794 14 20.308 14C19.328 14 18.596 14.614 18 15.303C17.405 14.613 16.672 14 15.692 14C14.205 14 13 15.204 13 16.689C13 19.229 16.891 22 18 22.5Z",
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
