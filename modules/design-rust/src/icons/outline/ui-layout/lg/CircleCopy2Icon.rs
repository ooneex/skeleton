use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleCopy2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleCopy2Icon(props: CircleCopy2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M35.9999 17.9193C41.2627 19.9322 44.9999 25.0297 44.9999 31.0001C44.9999 38.732 38.7319 45.0001 30.9999 45.0001C25.0295 45.0001 19.932 41.2628 17.9192 36.0001",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 31C24.732 31 31 24.732 31 17C31 9.26801 24.732 3 17 3C9.26801 3 3 9.26801 3 17C3 24.732 9.26801 31 17 31Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
