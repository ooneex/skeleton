use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ParkingSignIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ParkingSignIcon(props: ParkingSignIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M43 38L43 10C43 7.23858 40.7614 5 38 5L10 5C7.23858 5 5 7.23857 5 10L5 38C5 40.7614 7.23857 43 10 43L38 43C40.7614 43 43 40.7614 43 38Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18 35V14H26.5C30.0899 14 33 16.9101 33 20.5V20.5C33 24.0899 30.0899 27 26.5 27H18.1906",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
