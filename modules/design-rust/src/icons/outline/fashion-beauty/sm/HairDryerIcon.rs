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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17.4186 14.7442L15.2279 21.3162C15.0918 21.7246 14.7097 22 14.2792 22L11.3869 22C10.7045 22 10.2225 21.3316 10.4381 20.6841L12.4969 14.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 11.0184L3.6857 12.7442C3.35726 12.8755 3 12.6336 3 12.2799L3 5.73475C3 5.38102 3.35726 5.13914 3.6857 5.27051L8 6.99623",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 11C17.1046 11 18 10.1046 18 9C18 7.89543 17.1046 7 16 7C14.8954 7 14 7.89543 14 9C14 10.1046 14.8954 11 16 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 15C19.3137 15 22 12.3137 22 9C22 5.68629 19.3137 3 16 3C14 3 11.6 3.2 8 6V12C11.6 14.8 14 15 16 15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
