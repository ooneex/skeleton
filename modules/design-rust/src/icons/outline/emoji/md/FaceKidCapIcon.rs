use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceKidCapIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceKidCapIcon(props: FaceKidCapIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6.2719 12C5.45737 13.6597 5 15.5264 5 17.5C5 24.4036 10.5964 30 17.5 30C24.4036 30 30 24.4036 30 17.5C30 15.5264 29.5426 13.6597 28.7281 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M19 3V2H16V3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 11.5L6 7.5C6 5.01472 8.01472 3 10.5 3L24.5 3.00001C26.9853 3.00001 29 5.01473 29 7.50001L29 12L1 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18 25C19.9073 25 21.6364 24.2372 22.899 23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20 8H24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 17C23 17.5523 22.5523 18 22 18C21.4477 18 21 17.5523 21 17C21 16.4477 21.4477 16 22 16C22.5523 16 23 16.4477 23 17Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
            }
            path {
                d: "M14 17C14 17.5523 13.5523 18 13 18C12.4477 18 12 17.5523 12 17C12 16.4477 12.4477 16 13 16C13.5523 16 14 16.4477 14 17Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
            }
        }
    }
}
