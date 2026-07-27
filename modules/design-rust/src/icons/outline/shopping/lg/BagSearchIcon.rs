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
                d: "M23.3749 43H12.1622C8.98637 43 6.61522 40.0777 7.26948 36.9699L10 24V14H38V23.2154",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M32.5 42C36.6421 42 40 38.6421 40 34.5C40 30.3579 36.6421 27 32.5 27C28.3579 27 25 30.3579 25 34.5C25 38.6421 28.3579 42 32.5 42Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M42.5 44.5L38 40L38.5 40.5",
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
