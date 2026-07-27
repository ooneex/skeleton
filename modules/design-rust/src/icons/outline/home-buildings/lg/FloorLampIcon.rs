use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FloorLampIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FloorLampIcon(props: FloorLampIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M32 30L32 29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M37.5 27.866L37 27",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M26.5 27.866L27 27",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M32 10V8C32 5.23858 29.7614 3 27 3H14C11.2386 3 9 5.23858 9 8V45H25V44C25 41.7909 23.2091 40 21 40H9.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M41.9091 22L22.0909 22C21.4884 22 21 21.5116 21 20.9091C21 14.8842 25.9751 10 32 10C38.0249 10 43 14.8842 43 20.9091C43 21.5116 42.5116 22 41.9091 22Z",
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
