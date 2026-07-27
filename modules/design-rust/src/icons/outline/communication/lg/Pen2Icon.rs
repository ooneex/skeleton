use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pen2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pen2Icon(props: Pen2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29.6869 9.68691L29.5 9.5L39.8787 19.8787C41.0503 21.0503 41.0503 22.9497 39.8787 24.1213L34 30C32.8954 31.1046 32.8954 32.8954 34 34V34C35.1046 35.1046 36.8954 35.1046 38 34L39 33",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6 42L17.2594 39.1852L42.2509 14.1936C44.5828 11.8617 44.5828 8.08096 42.2509 5.74907C39.919 3.41718 36.1383 3.41718 33.8064 5.74907L8.81484 30.7406L6 42Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
