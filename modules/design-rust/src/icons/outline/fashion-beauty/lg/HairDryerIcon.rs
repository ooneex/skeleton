use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HairDryerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HairDryerIcon(props: HairDryerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M34.8372 29.4885L30.4747 41.6741C30.19 42.4694 29.4364 43 28.5917 43L22.8368 43C21.4541 43 20.4885 41.6304 20.9531 40.3281L24.8686 29.3511",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14.0117 22.9687L6.40838 26.37C5.74686 26.6659 5.00004 26.1819 5.00004 25.4572L5.00004 10.5445C5.00004 9.8194 5.74768 9.33535 6.4093 9.63212L13.9961 13.0352",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M33 23C35.7614 23 38 20.7614 38 18C38 15.2386 35.7614 13 33 13C30.2386 13 28 15.2386 28 18C28 20.7614 30.2386 23 33 23Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M31.1429 30C38.2437 30 44 24.6274 44 18C44 11.3726 38.2437 6 31.1429 6C26.8571 6 21.7143 6.4 14 12V24C21.7143 29.6 26.8571 30 31.1429 30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M23 18H20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
