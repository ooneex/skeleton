use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BagReturnIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BagReturnIcon(props: BagReturnIconProps) -> Element {
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
                d: "M27 43H24.0001H12.1622C8.98637 43 6.61522 40.0777 7.26948 36.97L10 24V14.0001H38V24.0001L38.3317 26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M32 39L27 34L32 29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M38 45H39.5C42.5375 45 45 42.5376 45 39.5V39.5C45 36.4624 42.5375 34 39.5 34H27H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
