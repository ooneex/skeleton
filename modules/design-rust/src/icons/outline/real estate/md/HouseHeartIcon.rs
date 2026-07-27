use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HouseHeartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HouseHeartIcon(props: HouseHeartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 13L16 2L30 13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M5 16V26C5 27.657 6.343 29 8 29H24C25.657 29 27 27.657 27 26V16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M22 17.395C22 20.601 17.331 23.8684 16 24.5C14.669 23.8684 10 20.601 10 17.395C10 15.5197 11.447 14 13.231 14C14.3559 14 15.2104 14.71 15.9077 15.5345H16.0923C16.7896 14.71 17.6441 14 18.769 14C20.553 14 22 15.5197 22 17.395Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
