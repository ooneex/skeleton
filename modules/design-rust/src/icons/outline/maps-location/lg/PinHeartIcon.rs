use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PinHeartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PinHeartIcon(props: PinHeartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "24",
                cy: "19",
                r: "5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M36 45.5C38.218 44.5 46 38.958 46 33.878C46 30.908 43.588 28.5 40.616 28.5C38.656 28.5 37.192 29.728 36 31.106C34.81 29.726 33.344 28.5 31.384 28.5C28.41 28.5 26 30.908 26 33.878C26 38.958 33.782 44.5 36 45.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 45C24 45 8 32.5082 8 19.2911C8 8.90479 16.2007 3 24 3C31.7993 3 40 8.90479 40 19.2911C40 20.7078 39.817 22.1156 39.4902 23.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
