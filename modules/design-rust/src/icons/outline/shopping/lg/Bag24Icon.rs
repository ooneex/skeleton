use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Bag24IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Bag24Icon(props: Bag24IconProps) -> Element {
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
                d: "M20 43H12.152C8.97946 43 6.60906 40.0835 7.25758 36.9779L9.96773 24V14H38V24L38.7369 27.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M25 34L25.0728 33.7816C25.6265 32.1204 27.181 31 28.932 31V31C31.1787 31 33 32.8213 33 35.068V35.4039C33 36.73 32.4024 37.9855 31.3732 38.8218L25 44V45H33",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M43 45V41V31H42.4023L35 40.4718V41H45",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
