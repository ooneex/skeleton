use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LaptopCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LaptopCheckIcon(props: LaptopCheckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 13V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M1 17V19C1 20.1046 1.89543 21 3 21H21C22.1046 21 23 20.1046 23 19V17H16C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17H1Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 10L11 13L16.5 7.5",
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
