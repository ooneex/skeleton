use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleHalfDashedCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleHalfDashedCheckIcon(props: CircleHalfDashedCheckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13.5 26.3478L19.5 33L34.5 16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15.9615 4.59351C14.2541 5.30151 12.6604 6.22825 11.2153 7.33879",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11.2153 40.6613C12.6604 41.7718 14.2541 42.6985 15.9614 43.4065",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4.59338 32.0385C5.30138 33.7458 6.22812 35.3395 7.33865 36.7846",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3.1773 21.2585C2.94335 23.053 2.94334 24.9468 3.17728 26.7412",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7.33876 11.2155C6.22824 12.6606 5.3015 14.2543 4.59351 15.9616",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21.291 3.17311C22.1779 3.05889 23.082 3 24 3C35.598 3 45 12.402 45 24C45 35.598 35.598 45 24 45C23.0597 45 22.1339 44.9382 21.2263 44.8185",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
