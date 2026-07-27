use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WheelbarrowIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WheelbarrowIcon(props: WheelbarrowIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26.5 8H6.27008C4.57441 8 3.6481 9.97772 4.73364 11.2804L16.3342 25.2011C16.7561 25.7073 17.381 26 18.0399 26V26C19.1597 26 20.1042 25.1662 20.2431 24.0551L21 18",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M31 4L27.0001 3.99998L25.5001 16L9.50009 23L9.88587 22.8411",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6.5 28C8.433 28 10 26.433 10 24.5C10 22.567 8.433 21 6.5 21C4.567 21 3 22.567 3 24.5C3 26.433 4.567 28 6.5 28Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
