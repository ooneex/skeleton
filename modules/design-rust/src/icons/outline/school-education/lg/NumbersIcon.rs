use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumbersIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumbersIcon(props: NumbersIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M42 39H22V36.5V36.5C22 33.8047 23.7034 31.4038 26.2474 30.5134L35.7324 27.1937C39.4864 25.8798 42 22.3369 42 18.3596V18.3596C42 13.1904 37.8096 9 32.6404 9H32C26.4772 9 22 13.4772 22 19V19.5714",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13 39V9H12L4 16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
