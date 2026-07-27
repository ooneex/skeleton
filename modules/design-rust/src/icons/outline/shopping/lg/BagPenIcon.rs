use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BagPenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BagPenIcon(props: BagPenIconProps) -> Element {
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
                d: "M38 21.7427V14H10V24L7.26948 36.9699C6.61522 40.0777 8.98637 43 12.1622 43H20.1475",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M30.6139 44.5233L42.4315 32.7056C43.85 31.287 43.85 28.9871 42.4315 27.5685C41.0129 26.15 38.713 26.15 37.2944 27.5685L25.4768 39.3861L25 45L30.6139 44.5233Z",
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
