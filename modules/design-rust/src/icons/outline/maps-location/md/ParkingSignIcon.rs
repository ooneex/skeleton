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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 24V8H17C19.7614 8 22 10.2386 22 13V13C22 15.7614 19.7614 18 17 18H12.259",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M26 3H6C4.34315 3 3 4.34315 3 6V26C3 27.6569 4.34315 29 6 29H26C27.6569 29 29 27.6569 29 26V6C29 4.34315 27.6569 3 26 3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
