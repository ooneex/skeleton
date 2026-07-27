use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FoodPetIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FoodPetIcon(props: FoodPetIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26.6975 15.0001C27.1247 11.1429 25.3741 7.00006 21 7.00006C18.8696 7.00006 18.0646 7.99323 17 9.66673C16.1623 9.46263 14.486 9.52296 13.3834 11.5001",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5.30293 14.9998C4.63847 12.52 5.44867 9.62625 8.48333 8.81311C8.79956 8.72838 9.11548 8.69588 9.42892 8.68872C10.0241 6.79671 11.5309 5.23578 13.5887 4.68439C16.0591 4.02246 18.5826 5.00288 20 6.95637",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M27.5 15.0001H4.5L2.5 26.0001L2.93194 26.128C11.4607 28.6551 20.5393 28.6551 29.0681 26.128L29.5 26.0001L27.5 15.0001Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 21H18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
