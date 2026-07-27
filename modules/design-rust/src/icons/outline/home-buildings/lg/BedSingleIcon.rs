use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BedSingleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BedSingleIcon(props: BedSingleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 31H45",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M7 20L7 11C7 8.23857 9.23858 6 12 6L36 6C38.7614 6 41 8.23858 41 11L41 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M31 12L17 12C15.8954 12 15 12.8954 15 14L15 18C15 19.1046 15.8954 20 17 20L31 20C32.1046 20 33 19.1046 33 18L33 14C33 12.8954 32.1046 12 31 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M40 25L8 25C5.23857 25 3 27.2386 3 30L3 41L7 41L9 36L39 36L41 41L45 41L45 30C45 27.2386 42.7614 25 40 25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
