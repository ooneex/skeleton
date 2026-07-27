use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RainbowCloudIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RainbowCloudIcon(props: RainbowCloudIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20.0585 13.5C20.6429 14.1631 21 15.0408 21 16C21 18.0533 19.5 20 17 20H5C2.5 20 1 18.2092 1 16C1 14.2267 2.18182 12.7333 3.72727 12.36C3.90633 8.77534 6.74894 6.08291 10.3084 6.00189",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 14C12 7.92487 16.9249 3 23 3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 14C16 10.134 19.134 7 23 7",
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
