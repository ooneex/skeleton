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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.5 20V9.5C16.5 5.35786 19.8579 2 24 2C28.1421 2 31.5 5.35786 31.5 9.5V20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23.5 43H12.152C8.97946 43 6.60906 40.0835 7.25758 36.9779L9.96773 24V14H38V23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M34 45C36.218 44 44 38.458 44 33.378C44 30.408 41.588 28 38.616 28C36.656 28 35.192 29.228 34 30.606C32.81 29.226 31.344 28 29.384 28C26.41 28 24 30.408 24 33.378C24 38.458 31.782 44 34 45Z",
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
